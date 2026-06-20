import { Star, Quote } from "lucide-react";
import testimonials from "@/data/reviews.json";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-surface-alt dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust banner */}
        <div className="text-center mb-14">
          <p className="text-text-secondary dark:text-gray-400 text-sm uppercase tracking-wider mb-3">
            Trusted by thousands
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-white mb-3">
            Join thousands of satisfied customers who found their perfect{" "}
            <span className="text-gold">beauty experience</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`p-7 rounded-2xl bg-surface dark:bg-navy
                         border border-border dark:border-white/8 card-hover
                         stagger-${index + 1}`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold mb-4" />

              {/* Quote text */}
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-navy"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-text-primary dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-muted dark:text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
