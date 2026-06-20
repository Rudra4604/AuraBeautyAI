"use client";

import { useState } from "react";
import { Calendar, Sparkles, CheckCircle2, Circle } from "lucide-react";
import { ceremonies, budgetRanges, bridalTimeline } from "@/lib/constants";

export default function BridalPlannerPage() {
  const [weddingDate, setWeddingDate] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedCeremonies, setSelectedCeremonies] = useState<string[]>([]);
  const [showTimeline, setShowTimeline] = useState(false);

  const toggleCeremony = (c: string) => {
    setSelectedCeremonies((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-navy">
      <div className="bg-gradient-to-r from-navy to-navy-light py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            AI-Powered
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            AI Bridal <span className="text-gold">Beauty Planner</span>
          </h1>
          <p className="text-gray-400 text-lg">Plan your perfect bridal beauty journey with AI</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-surface dark:bg-navy-light border border-border dark:border-white/8">
              <h2 className="text-xl font-semibold text-text-primary dark:text-white mb-6">
                Plan Your Perfect Bridal Journey
              </h2>

              <div className="mb-7">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">Wedding Date</label>
                <input type="date" value={weddingDate} onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-surface dark:bg-navy text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer" />
              </div>

              <div className="mb-7">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">Beauty Budget</label>
                <select value={budget} onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-surface dark:bg-navy text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer">
                  <option value="">Select budget range</option>
                  {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-text-primary dark:text-white mb-3">
                  Ceremonies <span className="text-text-muted font-normal">(Select all that apply)</span>
                </label>
                <div className="space-y-3">
                  {ceremonies.map((c) => {
                    const isSelected = selectedCeremonies.includes(c);
                    return (
                      <button key={c} type="button" onClick={() => toggleCeremony(c)}
                        className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer
                          ${isSelected
                            ? "border-gold bg-gold/5 text-gold"
                            : "border-border dark:border-white/10 text-text-secondary dark:text-gray-400 hover:border-gold/50"}`}>
                        {isSelected ? <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> : <Circle className="w-5 h-5 text-text-muted shrink-0" />}
                        <span className="font-medium">{c}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button onClick={() => setShowTimeline(true)}
                className="btn-gold w-full flex items-center justify-center gap-2 text-base py-4 cursor-pointer">
                <Sparkles className="w-5 h-5" />
                Generate My Timeline
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              {!showTimeline ? (
                <div className="p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-alt dark:from-navy-light dark:to-navy border border-border dark:border-white/8 text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-2">Ready to Plan Your Bridal Journey?</h3>
                  <p className="text-text-secondary dark:text-gray-400 text-sm">Enter your wedding details to receive a personalized beauty timeline</p>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in-up">
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-4">💍 Your Bridal Timeline</h3>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/20" />
                    {bridalTimeline.map((phase, i) => (
                      <div key={phase.week} className={`relative pl-10 pb-6 stagger-${i + 1}`}>
                        <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-gold border-2 border-surface dark:border-navy-light" />
                        <div className="p-4 rounded-xl bg-surface dark:bg-navy-light border border-border dark:border-white/8">
                          <span className="text-xs font-semibold text-gold uppercase tracking-wider">{phase.week}</span>
                          <h4 className="font-semibold text-text-primary dark:text-white mt-1 mb-2">{phase.title}</h4>
                          <ul className="space-y-1.5">
                            {phase.tasks.map((task) => (
                              <li key={task} className="text-sm text-text-secondary dark:text-gray-400 flex items-start gap-2">
                                <span className="text-gold mt-0.5">•</span>{task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
