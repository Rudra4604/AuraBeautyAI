"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/contexts/AppProvider";
import { CalendarDays, MapPin, Scissors, Star, Settings, Heart } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, bookings } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-surface dark:bg-navy py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="p-8 rounded-3xl bg-white dark:bg-navy-light border border-border dark:border-white/10 shadow-lg flex flex-col md:flex-row items-center gap-6">
          <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full bg-surface-alt border-4 border-gold/20" />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-text-primary dark:text-white mb-1">Welcome, {user.name}</h1>
            <p className="text-text-secondary dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> Ahmedabad, Gujarat
            </p>
          </div>
          <button className="btn-outline-gold py-2.5 px-6 flex items-center gap-2">
            <Settings className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Bookings */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-light border border-border dark:border-white/10 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-text-primary dark:text-white flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-gold" /> My Appointments
                </h2>
                <Link href="/salons" className="text-sm font-medium text-gold hover:underline">Book New</Link>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-border dark:border-white/10 rounded-2xl">
                  <Scissors className="w-12 h-12 text-text-muted mx-auto mb-3 opacity-50" />
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-1">No upcoming appointments</h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400 mb-4">You haven't booked any beauty services yet.</p>
                  <Link href="/salons" className="btn-gold py-2 px-6">Explore Salons</Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-border dark:border-white/10 hover:border-gold/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold px-2 py-1 rounded bg-success/10 text-success">{booking.status}</span>
                          <span className="text-sm text-text-secondary dark:text-gray-400">ID: #{booking.id}</span>
                        </div>
                        <h3 className="font-semibold text-text-primary dark:text-white text-lg">{booking.salonName}</h3>
                        <p className="text-sm text-text-secondary dark:text-gray-400 flex items-center gap-1.5 mt-1">
                          <Scissors className="w-3.5 h-3.5" /> {booking.service}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-medium text-text-primary dark:text-white flex items-center sm:justify-end gap-1.5">
                          <CalendarDays className="w-4 h-4 text-gold" /> {booking.date}
                        </p>
                        <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">{booking.time}</p>
                        <p className="text-sm font-semibold text-gold mt-1">{booking.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* AI Recommendations */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Star className="w-24 h-24 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-text-primary dark:text-white mb-2 relative z-10">Aura Beauty Insights</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 mb-4 relative z-10">
                Based on your profile, we recommend a <strong className="text-gold">Deep Cleanse Facial</strong> this month due to Ahmedabad's current humidity.
              </p>
              <Link href="/ai-advisor" className="text-sm font-medium text-gold hover:underline relative z-10 flex items-center gap-1">
                Consult AI Advisor <Star className="w-3 h-3" />
              </Link>
            </div>

            {/* Saved Salons */}
            <div className="p-6 rounded-3xl bg-white dark:bg-navy-light border border-border dark:border-white/10 shadow-lg">
              <h3 className="text-lg font-bold text-text-primary dark:text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose" /> Saved Salons
              </h3>
              <div className="text-center py-6 text-sm text-text-secondary dark:text-gray-400">
                You have no saved salons yet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
