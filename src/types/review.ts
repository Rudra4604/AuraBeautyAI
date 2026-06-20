export interface Review {
  id: number | string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  color?: string;
  rating: number;
}
