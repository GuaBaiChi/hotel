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
    description: 'A comfortable room with all basic amenities',
    price: 100,
    imageUrl: 'https://example.com/standard-room.jpg'
  },
  {
    id: 2,
    name: 'Deluxe Room 2',
    description: 'A luxurious room with additional amenities',
    price: 150,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 3,
    name: 'Deluxe Room 3',
    description: 'A luxurious room with additional amenities',
    price: 200,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 4,
    name: 'Deluxe Room 4',
    description: 'A luxurious room with additional amenities',
    price: 250,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 5,
    name: 'Deluxe Room 5',
    description: 'A luxurious room with additional amenities',
    price: 300,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  {
    id: 6,
    name: 'Deluxe Room 6',
    description: 'A luxurious room with additional amenities',
    price: 350,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  // Add more room data as needed
];
