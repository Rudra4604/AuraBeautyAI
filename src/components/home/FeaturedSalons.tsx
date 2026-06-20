"use client";

import { Star, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import mockSalons from "@/data/salons.json";

export default function FeaturedSalons() {
  const featured = mockSalons.slice(0, 3);

  return (
    <section id="featured-salons" className="py-20 bg-surface dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-white mb-3">
            Featured Salons in{" "}
            <span className="text-gold">Ahmedabad</span>
          </h2>
          <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Top-rated salons handpicked by our AI based on quality, hygiene, and customer satisfaction.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {featured.map((salon, index) => (
            <motion.div
              key={salon.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
              }}
              className="group rounded-2xl overflow-hidden bg-surface dark:bg-navy-light
                         border border-border dark:border-white/8 card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-surface-alt dark:bg-navy-light">
                <Image
                  src={salon.coverImage}
                  alt={salon.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badges */}
                {salon.isOpen && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-success text-white flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    Open Now
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white group-hover:text-gold transition-colors">
                    {salon.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="font-semibold text-text-primary dark:text-white text-sm">{salon.rating}</span>
                    <span className="text-text-muted text-xs">({salon.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-text-secondary dark:text-gray-400 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {salon.area} • {salon.distance}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {salon.services.map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg
                               bg-gold/10 text-gold border border-gold/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-secondary dark:text-gray-400 text-sm">{salon.priceRange}</span>
                  <Link
                    href={`/salons/${salon.id}/book`}
                    className="btn-gold text-sm py-2 px-5"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/salons"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            View All Salons
          </Link>
        </div>
      </div>
    </section>
  );
}
