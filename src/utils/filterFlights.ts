// utils/filterFlights.ts

import { Flight, SearchData } from '../types/types';

export const filterFlights = (flights: Flight[], searchData: SearchData): Flight[] => {
  const { origin, destination, startDate, endDate, weight } = searchData;

  const filteredFlights = flights.filter((flight) => {
    const departureDate = new Date(flight.departureDate);
    const arrivalDate = new Date(flight.arrivalDate);

    return (
      flight.origin === origin &&
      flight.destination === destination &&
      departureDate >= new Date(startDate) &&
      departureDate <= new Date(endDate) &&
      arrivalDate >= new Date(startDate) &&
      arrivalDate <= new Date(endDate) &&
      flight.weight === weight
    );
  });

  return filteredFlights;
};
