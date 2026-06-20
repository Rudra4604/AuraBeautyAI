import Link from "next/link";
import { Sparkles, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-navy text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-navy" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Aura<span className="text-gold">Beauty</span> AI
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ahmedabad&apos;s premier AI-powered beauty marketplace connecting you with the finest salons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/salons", label: "Find Salons" },
                { href: "/ai-advisor", label: "AI Advisor" },
                { href: "/bridal-planner", label: "Bridal Planner" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Hair Styling", "Makeup", "Spa & Wellness", "Bridal Services"].map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                Ahmedabad, Gujarat
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                support@aurabeauty.ai
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                +91 98765 43210
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © 2026 AuraBeauty AI. All rights reserved. Made with{" "}
            <span className="text-red-400">❤️</span> in Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  );
}
