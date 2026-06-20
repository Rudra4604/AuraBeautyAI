"use client";

import { Users, Building2, CalendarDays, TrendingUp, Sparkles, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import mockSalons from "@/data/salons.json";

const RevenueChart = dynamic(() => import("@/components/dashboard/RevenueChart"), { ssr: false });
const BookingsChart = dynamic(() => import("@/components/dashboard/BookingsChart"), { ssr: false });

export default function AdminDashboardPage() {
  const stats = [
    { icon: Users, label: "Total Users", value: "1,248", change: "+12%", color: "bg-blue-500/10 text-blue-500" },
    { icon: Building2, label: "Partner Salons", value: mockSalons.length.toString(), change: "+5%", color: "bg-purple-500/10 text-purple-500" },
    { icon: CalendarDays, label: "Bookings (M)", value: "3,420", change: "+18%", color: "bg-success/10 text-success" },
    { icon: TrendingUp, label: "Platform Rev", value: "₹4.2L", change: "+22%", color: "bg-gold/10 text-gold" },
  ];

  return (
    <div className="min-h-screen bg-surface dark:bg-navy py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-primary dark:text-white">Admin Overview</h1>
            <p className="text-text-secondary dark:text-gray-400 mt-1">AuraBeauty Platform Analytics - Ahmedabad</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-xl text-gold font-medium">
            <Sparkles className="w-4 h-4" /> AI Analytics Active
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl bg-white dark:bg-navy-light border border-border dark:border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-success flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-text-secondary dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-text-primary dark:text-white mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-light border border-border dark:border-white/10">
            <h2 className="text-lg font-bold text-text-primary dark:text-white mb-6">Platform Revenue (YTD)</h2>
            <RevenueChart />
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-light border border-border dark:border-white/10">
            <h2 className="text-lg font-bold text-text-primary dark:text-white mb-6">Weekly Bookings Trend</h2>
            <BookingsChart />
          </div>
        </div>

        {/* Top Salons */}
        <div className="p-6 rounded-2xl bg-white dark:bg-navy-light border border-border dark:border-white/10">
          <h2 className="text-lg font-bold text-text-primary dark:text-white mb-6">Top Performing Salons (Ahmedabad)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border dark:border-white/10 text-text-secondary dark:text-gray-400">
                  <th className="py-3 px-4 font-medium">Salon Name</th>
                  <th className="py-3 px-4 font-medium">Area</th>
                  <th className="py-3 px-4 font-medium">Rating</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockSalons.slice(0, 5).map((salon) => (
                  <tr key={salon.id} className="border-b border-border/50 dark:border-white/5 hover:bg-surface-alt dark:hover:bg-navy transition-colors">
                    <td className="py-4 px-4 font-medium text-text-primary dark:text-white">{salon.name}</td>
                    <td className="py-4 px-4 text-text-secondary dark:text-gray-400 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{salon.area}</td>
                    <td className="py-4 px-4 font-medium">{salon.rating}</td>
                    <td className="py-4 px-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
