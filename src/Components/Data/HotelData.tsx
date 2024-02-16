export type Hotel = {
  name: string;
  description: string;
  imageUrl: string;
  phone: string;
  email: string;
}

export const hotelData: Hotel = {
  name: "Fhloston Paradise",
  description: "Experience luxury at our beautiful resort.",
  imageUrl: "https://example.com/hotel-image.jpg",
  phone: "0-123-456-789",
  email: "Fhloston@Paradise.com",
};


export type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Sample room data
export const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Room 1',
    description: 'A comfortable room with all basic amenities.',
    price: 100,
    imageUrl: 'https://example.com/standard-room.jpg'
  },
  {
    id: 2,
    name: 'Deluxe Room 2',
    description: 'Indulge in luxury with our Deluxe Room. Experience spaciousness and elegance with additional amenities.',
    price: 150,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 3,
    name: 'Deluxe Room 3',
    description: 'Experience unparalleled comfort and style in our Deluxe Room. Enjoy upgraded features and luxurious furnishings.',
    price: 200,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 4,
    name: 'Deluxe Room 4',
    description: 'Step into luxury with our Deluxe Room. Immerse yourself in sophistication and relaxation with premium amenities.',
    price: 250,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 5,
    name: 'Deluxe Room 5',
    description: 'Experience the pinnacle of luxury in our Deluxe Room. Revel in opulence and comfort with unparalleled amenities and personalized service.',
    price: 300,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 6,
    name: 'Deluxe Room 6',
    description: 'Indulge in the ultimate luxury experience with our Deluxe Room. Elevate your stay with lavish amenities and exquisite attention to detail.',
    price: 350,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  // Add more room data as needed
];
