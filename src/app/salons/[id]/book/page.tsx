"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/contexts/AppProvider";
import mockSalons from "@/data/salons.json";
import { Calendar as CalendarIcon, Clock, Scissors, CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { user, addBooking } = useApp();
  
  const salon = mockSalons.find((s) => s.id === resolvedParams.id) || mockSalons[0];

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"];

  const handleConfirm = () => {
    if (!user) {
      router.push("/login");
      return;
    }
    
    addBooking({
      id: Math.random().toString(36).substr(2, 9),
      salonName: salon.name,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      status: "Confirmed",
      price: salon.priceRange + " estimated"
    });
    
    setStep(4); // Success screen
  };

  if (step === 4) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-surface dark:bg-navy px-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-navy-light border border-border dark:border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="w-20 h-20 mx-auto bg-success/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2">Booking Confirmed!</h2>
          <p className="text-text-secondary dark:text-gray-400 mb-8">
            Your appointment at {salon.name} for {selectedService} is set for {selectedDate} at {selectedTime}.
          </p>
          <Link href="/dashboard" className="w-full btn-gold py-3 block text-center">
            View Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-navy py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/salons" className="inline-flex items-center gap-2 text-text-secondary dark:text-gray-400 hover:text-gold transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to Salons
        </Link>

        <div className="bg-white dark:bg-navy-light rounded-3xl border border-border dark:border-white/10 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="relative h-48 bg-surface-alt">
            <Image src={salon.coverImage} alt={salon.name} fill className="object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">{salon.name}</h1>
              <p className="opacity-90">{salon.area}, Ahmedabad</p>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Steps Progress */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border dark:bg-white/10 -z-10" />
              {[1, 2, 3].map((num) => (
                <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step >= num ? "bg-gold text-white" : "bg-surface-alt dark:bg-navy border border-border dark:border-white/10 text-text-muted"
                }`}>
                  {num}
                </div>
              ))}
            </div>

            {/* Step 1: Service */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-xl font-semibold text-text-primary dark:text-white flex items-center gap-2">
                  <Scissors className="w-5 h-5 text-gold" /> Select Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {salon.services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedService === service 
                          ? "border-gold bg-gold/5" 
                          : "border-border dark:border-white/10 hover:border-gold/50"
                      }`}
                    >
                      <span className={`block font-medium ${selectedService === service ? "text-gold" : "text-text-primary dark:text-white"}`}>
                        {service}
                      </span>
                    </button>
                  ))}
                </div>
                <button 
                  disabled={!selectedService}
                  onClick={() => setStep(2)} 
                  className="w-full btn-gold py-3 mt-4 disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-xl font-semibold text-text-primary dark:text-white flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-gold" /> Select Date & Time
                </h2>
                <div>
                  <label className="block text-sm font-medium text-text-primary dark:text-white mb-2">Date</label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 rounded-xl border border-border dark:border-white/10 bg-surface dark:bg-navy text-text-primary dark:text-white focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary dark:text-white mb-2 mt-4">Time Slot</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-gold text-white border-gold"
                            : "border-border dark:border-white/10 text-text-secondary dark:text-gray-400 hover:border-gold"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-border dark:border-white/10 font-medium">Back</button>
                  <button 
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(3)} 
                    className="flex-1 btn-gold py-3 disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-xl font-semibold text-text-primary dark:text-white flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-gold" /> Confirm Details
                </h2>
                <div className="p-6 rounded-2xl bg-surface dark:bg-navy border border-border dark:border-white/10 space-y-4">
                  <div className="flex justify-between border-b border-border dark:border-white/10 pb-4">
                    <span className="text-text-secondary dark:text-gray-400">Salon</span>
                    <span className="font-semibold text-text-primary dark:text-white">{salon.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-border dark:border-white/10 pb-4">
                    <span className="text-text-secondary dark:text-gray-400">Service</span>
                    <span className="font-semibold text-text-primary dark:text-white">{selectedService}</span>
                  </div>
                  <div className="flex justify-between border-b border-border dark:border-white/10 pb-4">
                    <span className="text-text-secondary dark:text-gray-400">Date</span>
                    <span className="font-semibold text-text-primary dark:text-white">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary dark:text-gray-400">Time</span>
                    <span className="font-semibold text-text-primary dark:text-white">{selectedTime}</span>
                  </div>
                </div>
                
                {!user && (
                  <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 text-gold text-sm text-center">
                    You will be redirected to log in to confirm this booking.
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-border dark:border-white/10 font-medium text-text-primary dark:text-white cursor-pointer">Back</button>
                  <button onClick={handleConfirm} className="flex-1 btn-gold py-3 cursor-pointer">
                    {user ? "Confirm Booking" : "Log In to Book"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
