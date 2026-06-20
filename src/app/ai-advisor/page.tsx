"use client";

import { useState } from "react";
import { Sparkles, Award, Star, MapPin } from "lucide-react";
import PillSelector from "@/components/common/PillSelector";
import { skinTypes, hairTypes, beautyConcerns, budgetRanges, occasions, aiRecommendations } from "@/lib/constants";

export default function AIAdvisorPage() {
  const [selectedSkin, setSelectedSkin] = useState<string[]>([]);
  const [selectedHair, setSelectedHair] = useState<string[]>([]);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [occasion, setOccasion] = useState("");
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen bg-surface dark:bg-navy">
      <div className="bg-gradient-to-r from-navy to-navy-light py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Your AI <span className="text-gold">Beauty Advisor</span>
          </h1>
          <p className="text-gray-400 text-lg">Get personalized beauty recommendations powered by AI</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="p-8 rounded-2xl bg-surface dark:bg-navy-light border border-border dark:border-white/8">
              <h2 className="text-xl font-semibold text-text-primary dark:text-white mb-6">Tell Us About Yourself</h2>

              <div className="mb-7">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">Skin Type</label>
                <PillSelector options={skinTypes} selected={selectedSkin} onToggle={(t) => setSelectedSkin([t])} />
              </div>

              <div className="mb-7">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">Hair Type</label>
                <PillSelector options={hairTypes} selected={selectedHair} onToggle={(t) => setSelectedHair([t])} />
              </div>

              <div className="mb-7">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">
                  Beauty Concerns <span className="text-text-muted font-normal">(Select all that apply)</span>
                </label>
                <PillSelector
                  options={beautyConcerns}
                  selected={selectedConcerns}
                  onToggle={(c) => setSelectedConcerns((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c])}
                  multiSelect
                />
              </div>

              <div className="mb-7">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">Budget Range</label>
                <select value={budget} onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-surface dark:bg-navy text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer">
                  <option value="">Select budget range</option>
                  {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">Occasion</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-surface dark:bg-navy text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer">
                  <option value="">Select occasion</option>
                  {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <button onClick={() => setShowResults(true)}
                className="btn-gold w-full flex items-center justify-center gap-2 text-base py-4 cursor-pointer">
                <Sparkles className="w-5 h-5" />
                Get AI Recommendations
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24">
              {!showResults ? (
                <div className="p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-alt dark:from-navy-light dark:to-navy border border-border dark:border-white/8 text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-2">Ready to Find Your Perfect Match?</h3>
                  <p className="text-text-secondary dark:text-gray-400 text-sm">Fill in your details to receive personalized beauty recommendations</p>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in-up">
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-4">🎯 Your AI Recommendations</h3>
                  {aiRecommendations.map((rec, i) => (
                    <div key={rec.salon} className={`p-5 rounded-2xl bg-surface dark:bg-navy-light border border-border dark:border-white/8 card-hover stagger-${i + 1}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-text-primary dark:text-white">{rec.salon}</h4>
                        <span className="text-sm font-bold text-gold">{rec.match}% Match</span>
                      </div>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mb-3">{rec.reason}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {rec.services.map((s) => <span key={s} className="px-2 py-0.5 text-xs rounded-md bg-gold/10 text-gold">{s}</span>)}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-gold"><Award className="w-3.5 h-3.5" /><span className="font-medium">{rec.auraScore}</span></div>
                        <span className="text-text-secondary dark:text-gray-400">{rec.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
