export interface Salon {
  id: string | number;
  name: string;
  category?: string;
  area?: string;
  location?: string;
  rating: number;
  reviews: number;
  priceRange: string;
  services: string[];
  isOpen: boolean;
  coverImage?: string;
  image?: string;
  distance: string;
  auraScore: number;
  description?: string;
}
