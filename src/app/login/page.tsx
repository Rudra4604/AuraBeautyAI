"use client";

import { useState } from "react";
import { useApp } from "@/contexts/AppProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useApp();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Mock login logic
    login(email);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-surface dark:bg-navy px-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-navy-light border border-border dark:border-white/10 shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center mb-8">
          <div className="w-12 h-12 mx-auto bg-gold/10 rounded-2xl flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary dark:text-white">Welcome Back</h1>
          <p className="text-text-secondary dark:text-gray-400 mt-2 text-sm">Sign in to your AuraBeauty account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="relative z-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-white mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@aurabeauty.ai"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-alt dark:bg-navy border border-border dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-text-primary dark:text-white">Password</label>
              <Link href="/forgot-password" className="text-xs text-gold hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-alt dark:bg-navy border border-border dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
              />
            </div>
          </div>

          <button type="submit" className="w-full btn-gold py-3 mt-2 cursor-pointer">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-secondary dark:text-gray-400 relative z-10">
          Don't have an account?{" "}
          <Link href="/signup" className="text-gold font-medium hover:underline">
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}
