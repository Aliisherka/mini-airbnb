export interface BookedDate {
  startDate: string;
  endDate: string;
}

export interface Place {
  _id: string;
  title: string;
  city: string;
  country: string;
  price: number;
  currency: string;
  rating: number;
  images: string[];
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  allowPets: boolean;
  maxPets: number;
  allowInfants: boolean;
  maxInfants: number;
  bookedDates: BookedDate[];
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
