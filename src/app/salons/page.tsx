"use client";

import { useState } from "react";
import { Star, MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import salons from "@/data/salons.json";
import { filterOptions } from "@/lib/constants";

export default function SalonsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [openNow, setOpenNow] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (arr: string[], item: string, setter: (v: string[]) => void) => {
    setter(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const filteredSalons = salons.filter((salon) => {
    if (searchQuery && !salon.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (openNow && !salon.isOpen) return false;
    if (selectedAreas.length > 0 && !selectedAreas.some((a) => salon.area.includes(a))) return false;
    if (selectedServices.length > 0 && !selectedServices.some((s) => salon.services.includes(s))) return false;
    return true;
  });

  const FilterPanel = () => (
    <div className="space-y-7">
      {/* Services */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary dark:text-white mb-3 uppercase tracking-wider">
          Services
        </h3>
        <div className="space-y-2.5">
          {filterOptions.services.map((service) => (
            <label key={service} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleFilter(selectedServices, service, setSelectedServices)}
                className="w-4 h-4 rounded border-border accent-gold cursor-pointer"
              />
              <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-gold transition-colors">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Area */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary dark:text-white mb-3 uppercase tracking-wider">
          Area
        </h3>
        <div className="space-y-2.5">
          {filterOptions.areas.map((area) => (
            <label key={area} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedAreas.includes(area)}
                onChange={() => toggleFilter(selectedAreas, area, setSelectedAreas)}
                className="w-4 h-4 rounded border-border accent-gold cursor-pointer"
              />
              <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-gold transition-colors">
                {area}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary dark:text-white mb-3 uppercase tracking-wider">
          Rating
        </h3>
        <div className="space-y-2.5">
          {filterOptions.ratings.map((rating) => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating)}
                onChange={() => toggleFilter(selectedRatings, rating, setSelectedRatings)}
                className="w-4 h-4 rounded border-border accent-gold cursor-pointer"
              />
              <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-gold transition-colors">
                {rating}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Open Now */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={openNow}
            onChange={() => setOpenNow(!openNow)}
            className="w-4 h-4 rounded border-border accent-gold cursor-pointer"
          />
          <span className="text-sm font-medium text-text-secondary dark:text-gray-400 group-hover:text-gold transition-colors">
            Open Now
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface dark:bg-navy">
      {/* Page header */}
      <div className="bg-gradient-to-r from-navy to-navy-light py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Find Your Perfect <span className="text-gold">Salon</span>
          </h1>
          <p className="text-gray-400">Browse top-rated beauty salons in Ahmedabad</p>

          {/* Search bar */}
          <div className="mt-6 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="salon-search"
              type="text"
              placeholder="Search salons by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 text-white placeholder-gray-500
                        border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile filter button */}
        <button
          id="mobile-filter-toggle"
          onClick={() => setShowFilters(true)}
          className="lg:hidden mb-6 flex items-center gap-2 px-4 py-2.5 rounded-xl
                    bg-surface-alt dark:bg-navy-light border border-border dark:border-white/10
                    text-text-primary dark:text-white text-sm font-medium cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start">
            <div className="p-6 rounded-2xl bg-surface dark:bg-navy-light border border-border dark:border-white/8">
              <h2 className="text-lg font-semibold text-text-primary dark:text-white mb-5">Filters</h2>
              <FilterPanel />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {showFilters && (
            <>
              <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setShowFilters(false)} />
              <div className="fixed top-0 left-0 h-full w-80 bg-surface dark:bg-navy-light z-50 p-6 overflow-y-auto lg:hidden shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-text-primary dark:text-white">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="cursor-pointer">
                    <X className="w-5 h-5 text-text-secondary" />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </>
          )}

          {/* Salon Listings */}
          <div className="flex-1 space-y-6">
            {filteredSalons.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-text-secondary dark:text-gray-400 text-lg">No salons found matching your filters.</p>
              </div>
            ) : (
              filteredSalons.map((salon) => (
                <div
                  key={salon.id}
                  id={`salon-card-${salon.id}`}
                  className="flex flex-col sm:flex-row rounded-2xl overflow-hidden
                           bg-surface dark:bg-navy-light border border-border dark:border-white/8
                           card-hover"
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-72 h-52 sm:h-auto shrink-0 bg-surface-alt dark:bg-navy-light">
                    <Image
                      src={salon.coverImage}
                      alt={salon.name}
                      fill
                      className="object-cover"
                    />
                    {salon.isOpen && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-success text-white flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        Open Now
                      </span>
                    )}

                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-text-primary dark:text-white">
                        {salon.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-4 h-4 text-gold fill-gold" />
                        <span className="font-semibold text-text-primary dark:text-white">{salon.rating}</span>
                        <span className="text-text-muted text-sm">({salon.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-text-secondary dark:text-gray-400 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {salon.area} • {salon.distance}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {salon.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-gold/10 text-gold border border-gold/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary dark:text-gray-400">{salon.priceRange}</span>
                      <Link href={`/salons/${salon.id}/book`} className="btn-gold py-2.5 px-6 text-sm cursor-pointer inline-block text-center">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
