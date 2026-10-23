export type Venue = {
  id: string;
  name: string;
  city: string;
  area: string;
  pricePerHour: number;
  rating: number;
  reviews: number;
  surface: string;
  amenities: string[];
  tag: string;
  color: "green" | "blue" | "orange" | "purple";
};

export const demoVenues: Venue[] = [
  { id: "venue-1", name: "Boundary Box Arena", city: "Ahmedabad", area: "Prahlad Nagar", pricePerHour: 1200, rating: 4.8, reviews: 124, surface: "Premium turf", amenities: ["Floodlights", "Parking", "Washroom"], tag: "Popular", color: "green" },
  { id: "venue-2", name: "PowerPlay Cricket Hub", city: "Mumbai", area: "Andheri West", pricePerHour: 1600, rating: 4.7, reviews: 98, surface: "Box cricket", amenities: ["Floodlights", "Changing room", "Drinking water"], tag: "Top rated", color: "blue" },
  { id: "venue-3", name: "The Sixes Sports Zone", city: "Surat", area: "Vesu", pricePerHour: 1000, rating: 4.6, reviews: 76, surface: "Synthetic turf", amenities: ["Parking", "Floodlights", "Seating"], tag: "Great value", color: "orange" },
  { id: "venue-4", name: "Pitch Perfect Arena", city: "Vadodara", area: "Akota", pricePerHour: 900, rating: 4.5, reviews: 61, surface: "Box cricket", amenities: ["Drinking water", "Washroom", "Parking"], tag: "New", color: "purple" },
  { id: "venue-5", name: "Wicket Warriors Turf", city: "Pune", area: "Baner", pricePerHour: 1400, rating: 4.8, reviews: 112, surface: "Premium turf", amenities: ["Floodlights", "Changing room", "Parking"], tag: "Popular", color: "green" },
  { id: "venue-6", name: "Crease & Chase Arena", city: "Rajkot", area: "Kalawad Road", pricePerHour: 800, rating: 4.4, reviews: 43, surface: "Synthetic turf", amenities: ["Floodlights", "Seating", "Drinking water"], tag: "Budget pick", color: "blue" }
];
