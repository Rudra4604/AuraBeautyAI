# AuraBeauty AI

A premium, production-grade Next.js application for an AI-powered beauty and salon platform. This project provides personalized salon recommendations, bridal planning timelines, and a seamless booking experience using advanced AI features.

## ✨ Features

- **AI Beauty Advisor**: Get personalized beauty and salon recommendations based on your unique skin type, hair type, budget, and beauty concerns.
- **Bridal Planner**: An intelligent timeline generator for brides to plan their beauty treatments leading up to the wedding day.
- **Aura Score**: A proprietary salon rating system evaluating hygiene, expertise, and customer satisfaction.
- **Floating Chatbot**: Interactive AI chatbot providing instant answers and navigation assistance.
- **Premium UI/UX**: Dark mode support, glassmorphism design, and smooth Framer Motion animations.
- **Comprehensive Dashboard**: Beautiful charts and booking management for salon owners and admins.

## 📂 Folder Structure

```
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── admin/            # Admin dashboard
│   ├── ai-advisor/       # AI Beauty Advisor flow
│   ├── bridal-planner/   # Bridal planner timeline
│   ├── dashboard/        # User/Salon dashboard
│   ├── login/            # Authentication
│   ├── profile/          # User profile settings
│   ├── salons/           # Salon listing and details
│   └── signup/           # User registration
├── components/           # Reusable React components
│   ├── ai/               # AI-related components (Chatbot, etc.)
│   ├── common/           # Shared UI elements (Button, Card, Input, Modal, etc.)
│   ├── dashboard/        # Dashboard charts and specific elements
│   ├── home/             # Landing page sections
│   └── layout/           # App-wide layout wrappers (Navbar, Footer)
├── contexts/             # React Context providers (Global State)
├── data/                 # Static JSON mock data
├── lib/                  # Utility functions and constants
└── types/                # TypeScript interfaces and types
```

## 🚀 Local Setup

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aurabeauty-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deployment

This project is optimized for deployment on Vercel.

### Vercel Deployment

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project** and import your GitHub repository.
4. Vercel will automatically detect the Next.js framework.
5. Click **Deploy**. Your app will be live in minutes.

The project is fully prepared for deployment with `.gitignore` properly configured to exclude build artifacts and environment files.
