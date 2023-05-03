// types/types.ts
export interface Flight {
    airlineName: string;
    airlineLogo: string;
    departureDate: string;
    arrivalDate: string;
    price: number;
    origin: string;
    destination: string;
    weight: number;
  }
  
  export interface SearchData {
    origin: string;
    destination: string;
    startDate: string;
    endDate: string;
    weight: number;
  }
  