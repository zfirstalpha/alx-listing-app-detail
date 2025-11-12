import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Ocean View Apartment",
    image: "/images/ocean.jpg",
    rating: 4.8,
    address: { city: "Addis Ababa", country: "Ethiopia" },
    description: "A cozy beachfront apartment with a beautiful ocean view.",
    category: ["WiFi", "Pool", "Air Conditioning", "Kitchen"],
    price: 120,
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/user1.jpg",
        rating: 5,
        comment: "Amazing place, clean and peaceful!",
      },
      {
        name: "Sarah Smith",
        avatar: "/images/user2.jpg",
        rating: 4,
        comment: "Great view and amenities. Would visit again!",
      },
    ],
  },
];
