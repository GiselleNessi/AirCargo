export interface Flight {
  airlineName: string;
  airlineLogo: string;
  departureDate: Date;
  arrivalDate: Date;
  price: number;
  origin: string;
  destination: string;
  weight: number;
  id: number;
}

export interface SearchData {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  weight: number;
}
