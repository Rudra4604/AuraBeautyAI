"use client";

import MagicWipeReveal from "@/components/common/MagicWipeReveal";

export default function BeforeAfterSlider() {
  return (
    <section className="py-20 bg-surface-alt dark:bg-navy-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold tracking-wide uppercase mb-4">
            Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-white mb-4">
            Before & After <span className="text-gold">Transformations</span>
          </h2>
          <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
            See the magic created by top Ahmedabad beauty experts. Drag the slider to reveal the stunning transformations.
          </p>
        </div>

        <div className="mt-12">
          <MagicWipeReveal 
            beforeImage="/Before.jpg"
            afterImage="/After.jpg" 
          />
        </div>
      </div>
    </section>
  );
}
