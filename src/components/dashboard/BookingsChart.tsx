"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import bookingsData from "@/data/bookings.json";
const weeklyBookings = bookingsData.weekly;

export default function BookingsChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={weeklyBookings}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
        <XAxis dataKey="day" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            background: "rgba(15,23,42,0.9)",
            border: "1px solid rgba(212,175,55,0.3)",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "13px",
          }}
        />
        <Bar dataKey="bookings" fill="#D4AF37" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
