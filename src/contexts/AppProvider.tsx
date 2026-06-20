"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Salon } from "@/types/salon";

type User = {
  name: string;
  email: string;
  avatar: string;
};

type AppContextType = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  savedSalons: string[];
  toggleSavedSalon: (id: string) => void;
  bookings: any[];
  addBooking: (booking: any) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [savedSalons, setSavedSalons] = useState<string[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  const login = (email: string) => {
    setUser({
      name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
      email,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + email,
    });
  };

  const logout = () => setUser(null);

  const toggleSavedSalon = (id: string) => {
    setSavedSalons((prev) => 
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const addBooking = (booking: any) => {
    setBookings((prev) => [booking, ...prev]);
  };

  return (
    <AppContext.Provider value={{ user, login, logout, savedSalons, toggleSavedSalon, bookings, addBooking }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
