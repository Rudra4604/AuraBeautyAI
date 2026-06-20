import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AppProvider } from "@/contexts/AppProvider";
import FloatingChatbot from "@/components/ai/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AuraBeauty AI — Discover. Plan. Book. Powered by AI.",
  description:
    "Ahmedabad's premier AI-powered beauty marketplace. Discover top salons, get personalized beauty advice, and plan your bridal journey with AI.",
  keywords: "beauty, salon, AI, bridal, marketplace, Ahmedabad, Aura Score",
  openGraph: {
    title: "AuraBeauty AI — AI-Powered Beauty Marketplace",
    description: "Discover top salons, get AI beauty advice, and plan your bridal journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <AppProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingChatbot />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
