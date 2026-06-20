"use client";

import { Sparkles, Calendar, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "AI Beauty Advisor",
    description:
      "Get personalized beauty recommendations based on your skin type, hair type, and beauty concerns.",
    link: "/ai-advisor",
    gradient: "from-gold/20 to-gold/5",
    iconColor: "text-gold",
  },
  {
    icon: Calendar,
    title: "AI Bridal Planner",
    description:
      "Plan your complete bridal beauty journey with AI-powered timeline and salon matching.",
    link: "/bridal-planner",
    gradient: "from-rose/30 to-rose/10",
    iconColor: "text-rose-dark",
  },
];

export default function AIFeatures() {
  return (
    <section id="ai-features" className="py-20 bg-surface-alt dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-white mb-3">
            AI-Powered{" "}
            <span className="text-gold">Beauty Intelligence</span>
          </h2>
          <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Leveraging artificial intelligence to transform your beauty experience
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
              }}
            >
              <Link
                href={feature.link}
                className="group relative block p-8 rounded-2xl bg-surface dark:bg-navy
                           border border-border dark:border-white/8 card-hover h-full"
              >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient}
                             flex items-center justify-center mb-5
                             group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center gap-1 text-gold text-sm font-medium
                            group-hover:gap-2 transition-all duration-200">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
