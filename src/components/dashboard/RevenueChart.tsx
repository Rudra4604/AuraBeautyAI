"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { revenueData } from "@/lib/constants";

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
        <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
        <Tooltip
          contentStyle={{
            background: "rgba(15,23,42,0.9)",
            border: "1px solid rgba(212,175,55,0.3)",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "13px",
          }}
          formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Revenue"]}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#D4AF37"
          strokeWidth={3}
          dot={{ fill: "#D4AF37", strokeWidth: 2, r: 5 }}
          activeDot={{ r: 7, fill: "#D4AF37", stroke: "#fff", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
