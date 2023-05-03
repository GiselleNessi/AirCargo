import flightsData from '../data/flightsData.json';

interface Flight {
  airlineName: string;
  airlineLogo: string;
  departureDate: string;
  arrivalDate: string;
  price: number;
  origin: string;
  destination: string;
  weight: number;
}

interface SearchCriteria {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  weight: string;
}

export const getFlightOptions = async (searchCriteria: SearchCriteria): Promise<Flight[]> => {
    const { origin, destination, startDate, endDate, weight } = searchCriteria;
  
    // create a map to keep track of the airlines seen in the search results
    const airlinesMap = new Map<string, Flight>();
    const results = flightsData.filter((flight) =>
      flight.origin === origin &&
      flight.destination === destination &&
      new Date(flight.departureDate) >= new Date(startDate) &&
      new Date(flight.departureDate) <= new Date(endDate) &&
      flight.weight >= parseInt(weight)
    ).map((flight) => {
      const existingFlight = airlinesMap.get(flight.airlineName);
      // if the airline hasn't been seen before, add it to the map and return the flight
      if (!existingFlight) {
        airlinesMap.set(flight.airlineName, flight);
        return flight;
      }
      // if the airline has already been seen, only return the flight if it's cheaper
      if (existingFlight.price > flight.price) {
        airlinesMap.set(flight.airlineName, flight);
        return flight;
      }
      return null;
    }).filter((flight) => flight !== null) as Flight[];
  
    // check if there are at least 3 airlines in the search results
    const uniqueAirlines = new Set(results.map((flight) => flight.airlineName));
    if (uniqueAirlines.size < 3) {
      throw new Error('Not enough unique airlines found in search results');
    }
  
    return results;
  };
  
