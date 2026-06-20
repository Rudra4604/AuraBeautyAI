export const chatbotIntents = [
  {
    keywords: ["bridal", "wedding", "marriage", "bride"],
    response: "For bridal makeup in Ahmedabad, I highly recommend 'Flawless Bridal Makeup' in Satellite or 'Divine Makeovers' in SG Highway. Both have 4.9+ ratings and specialize in Airbrush and HD makeup. Would you like me to open the Bridal Planner for you?"
  },
  {
    keywords: ["hair", "cut", "color", "spa", "keratin"],
    response: "Looking for hair services? 'Lush Hair Studio' in Vastrapur offers premium Balayage and Keratin treatments starting at ₹2000. Alternatively, 'Chic Styling' in Bodakdev has great reviews for quick haircuts."
  },
  {
    keywords: ["near", "satellite", "bodakdev", "vastrapur"],
    response: "I've found 12 top-rated salons near your location. 'Aura Luxe' is just 1.2km away with an Aura Score of 98. Would you like to view their service menu?"
  },
  {
    keywords: ["book", "appointment", "schedule"],
    response: "I can help you book that right away. Which salon and service would you like to schedule?"
  },
  {
    keywords: ["cheap", "affordable", "budget", "under"],
    response: "I found some highly-rated options that fit your budget. 'Glow & Go' in Navrangpura offers excellent services under ₹1,000 without compromising on hygiene."
  }
];

export const revenueData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 48000 },
  { month: "Mar", revenue: 52000 },
  { month: "Apr", revenue: 55000 },
  { month: "May", revenue: 61000 },
  { month: "Jun", revenue: 67000 },
];

export const filterOptions = {
  services: [
    "Bridal Makeup", "Hair Styling", "Spa", "Massage", "Facial", "Hair Color"
  ],
  areas: [
    "Satellite", "Vastrapur", "SG Highway", "Prahlad Nagar", "CG Road", "Bodakdev"
  ],
  ratings: ["4.5+", "4.0+", "3.5+"],
};

export const skinTypes = ["Dry", "Oily", "Combination", "Sensitive"];
export const hairTypes = ["Straight", "Wavy", "Curly", "Coily"];
export const beautyConcerns = [
  "Acne", "Dryness", "Fine Lines", "Dark Spots", "Hair Fall", "Dullness"
];
export const budgetRanges = [
  "Under ₹1,000", "₹1,000 - ₹3,000", "₹3,000 - ₹5,000", "₹5,000 - ₹10,000", "₹10,000+"
];
export const occasions = [
  "Daily Routine", "Wedding", "Party", "Date Night", "Professional", "Festival"
];
export const ceremonies = [
  "Mehendi", "Sangeet", "Haldi", "Wedding", "Reception", "Pre-Wedding Shoot"
];

export const aiRecommendations = [
  {
    salon: "Aura Luxe Salon",
    match: 98,
    reason: "Best match for your oily skin and hair fall concerns",
    services: ["Deep Cleansing Facial", "Hair Fall Treatment", "Scalp Therapy"],
    price: "₹4,500",
    auraScore: 96,
  },
  {
    salon: "Royal Touch Salon",
    match: 94,
    reason: "Excellent for acne-prone skin treatments",
    services: ["Anti-Acne Facial", "Hair Spa", "Threading"],
    price: "₹3,200",
    auraScore: 91,
  },
  {
    salon: "Serenity Spa & Salon",
    match: 89,
    reason: "Premium spa experience within your budget",
    services: ["Hydrating Facial", "Aromatherapy", "Hair Styling"],
    price: "₹3,800",
    auraScore: 90,
  },
];

export const bridalTimeline = [
  {
    week: "12 Weeks Before",
    title: "Initial Consultation",
    tasks: [
      "Book trial makeup session at Aura Luxe Salon (Aura Score: 96)",
      "Start skincare routine for bridal glow",
      "Hair treatment consultation",
    ],
  },
  {
    week: "8 Weeks Before",
    title: "Pre-Bridal Package Begins",
    tasks: [
      "Weekly facial treatments",
      "Hair conditioning sessions",
      "Mehendi artist booking confirmed",
    ],
  },
  {
    week: "4 Weeks Before",
    title: "Final Preparations",
    tasks: [
      "Final makeup trial",
      "Dress fitting coordination",
      "Sangeet & Haldi look finalized",
    ],
  },
  {
    week: "1 Week Before",
    title: "Final Week Prep",
    tasks: [
      "Final facial & cleanup",
      "Nail art appointment",
      "Pre-wedding shoot styling",
    ],
  },
  {
    week: "Wedding Day",
    title: "The Big Day",
    tasks: [
      "Bridal makeup at 6:00 AM",
      "Hair styling & draping",
      "Touch-up kit prepared",
    ],
  },
];
