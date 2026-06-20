"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useApp } from "@/contexts/AppProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/salons", label: "Salons" },
  { href: "/ai-advisor", label: "AI Advisor" },
  { href: "/bridal-planner", label: "Bridal Planner" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                   ${scrolled
                     ? "bg-surface/80 dark:bg-navy/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20"
                     : "bg-surface/60 dark:bg-navy/60 backdrop-blur-md"
                   }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" id="logo-link">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center
                            group-hover:shadow-lg group-hover:shadow-gold/25 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-navy" />
              </div>
              <span className="text-lg font-bold text-text-primary dark:text-white tracking-tight">
                Aura<span className="text-gold">Beauty</span> AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                              ${isActive
                                ? "text-gold bg-gold/10"
                                : "text-text-secondary dark:text-gray-400 hover:text-gold hover:bg-gold/5"
                              }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              {user ? (
                <div className="flex items-center gap-4">
                  <Link href="/dashboard" className="text-sm font-medium text-text-primary dark:text-white hover:text-gold transition-colors">
                    Dashboard
                  </Link>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-alt dark:bg-navy-light border border-border dark:border-white/10">
                    <img src={user.avatar} alt="Profile" className="w-6 h-6 rounded-full bg-gray-200" />
                    <span className="text-sm font-medium text-text-primary dark:text-white">{user.name}</span>
                  </div>
                  <button onClick={logout} className="text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-medium text-text-primary dark:text-white hover:text-gold transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="btn-gold text-sm py-2 px-5"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                id="mobile-menu-toggle"
                className="w-10 h-10 flex items-center justify-center rounded-lg
                          hover:bg-surface-alt dark:hover:bg-navy-light transition-colors cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 text-text-primary dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-text-primary dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-45 h-full w-72 bg-surface dark:bg-navy-light
                   shadow-2xl transform transition-transform duration-300 ease-out md:hidden
                   ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pt-20 px-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all
                          ${isActive
                            ? "text-gold bg-gold/10"
                            : "text-text-secondary dark:text-gray-400 hover:text-gold hover:bg-gold/5"
                          }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-16 sm:h-18" />
    </>
  );
}
