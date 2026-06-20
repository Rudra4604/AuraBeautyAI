"use client";

import { Search, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy min-h-[85vh] flex items-center"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[120px]" />
        {/* Floating sparkles */}
        <Sparkles className="absolute top-32 right-1/4 w-4 h-4 text-gold/30 animate-float" style={{ animationDelay: "0.5s" }} />
        <Sparkles className="absolute bottom-40 left-1/4 w-3 h-3 text-gold/20 animate-float" style={{ animationDelay: "2s" }} />
        <Sparkles className="absolute top-1/3 right-1/3 w-5 h-5 text-rose/20 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-gold">AI-Powered Beauty Marketplace</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Discover Your Perfect
          <br />
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Beauty Experience
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          AI-powered salon discovery &amp; beauty recommendations in Ahmedabad.
          <br className="hidden sm:block" />
          Discover. Plan. Book. Powered by AI.
        </motion.p>

        {/* Search Bar */}
        <motion.div variants={itemVariants} className="max-w-xl mx-auto mb-10">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gold transition-colors" />
            <input
              id="hero-search"
              type="text"
              placeholder="Search salons, services, or areas..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl glass text-white placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300
                        text-base"
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/salons"
            id="cta-explore-salons"
            className="btn-gold flex items-center gap-2 text-base"
          >
            Explore Salons
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ai-advisor"
            id="cta-try-advisor"
            className="btn-outline-gold flex items-center gap-2 text-base"
          >
            <Sparkles className="w-4 h-4" />
            Try AI Advisor
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { number: "500+", label: "Salons" },
            { number: "50K+", label: "Happy Users" },
            { number: "4.8", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold">{stat.number}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
