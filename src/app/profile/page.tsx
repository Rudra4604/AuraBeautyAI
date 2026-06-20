"use client";

import React from "react";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-surface-alt dark:bg-navy-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary dark:text-white mb-8">Your Profile</h1>
        
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center text-gold text-3xl font-bold">
              P
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary dark:text-white">Priya Sharma</h2>
              <p className="text-text-secondary dark:text-gray-400">priya.sharma@example.com</p>
              <Button variant="outline" className="mt-4">Edit Profile</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-text-primary dark:text-white mb-4">Account Settings</h3>
          <p className="text-text-secondary dark:text-gray-400">Manage your preferences and settings here.</p>
          <div className="mt-6">
            <Button variant="gold">Save Changes</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
