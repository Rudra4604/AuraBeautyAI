export interface Booking {
  id: number | string;
  client: string;
  package: string;
  date: string;
  time: string;
  price: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled' | string;
}

export interface WeeklyBooking {
  day: string;
  bookings: number;
}
