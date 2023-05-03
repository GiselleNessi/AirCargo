import Chance from "chance";
import { Flight } from "../types/types";

const chance = new Chance();

// List of airport codes
const airportCodes: string[] = ["JFK", "LAX", "SFO", "ORD"];

// List of airline names
const airlineNames: string[] = ["Delta Air Lines", "United Airlines", "American Airlines", "Southwest Airlines", "JetBlue Airways"];

const generateFlights = (count: number): Flight[] => {
  const flights: Flight[] = [];

  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);
  const maxDate = new Date(minDate.getTime() + 10 * 24 * 60 * 60 * 1000);

  for (let i = 0; i < count; i++) {
    const airlineName = airlineNames[i % airlineNames.length];

    const airlineLogo = chance.avatar({ protocol: "https" });
    const departureDate = new Date(chance.date({ min: minDate, max: maxDate }));
    const arrivalDate = new Date(
      departureDate.getTime() + chance.integer({ min: 1, max: 10 }) * 60 * 60 * 1000
    );

    const price = chance.pickone([
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    ]);

    // Generate a 3-letter airport code for origin and destination
    const originAirport = airportCodes[Math.floor(Math.random() * airportCodes.length)];
    let destinationAirport = originAirport;
    while (destinationAirport === originAirport) {
      destinationAirport = airportCodes[Math.floor(Math.random() * airportCodes.length)];
    }

    const flight: Flight = {
      airlineName,
      airlineLogo,
      departureDate,
      arrivalDate,
      price,
      origin: originAirport,
      destination: destinationAirport,
      weight: chance.integer({ min: 1, max: 100 }),
      id: i,
    };

    flights.push(flight);
  }
console.log(flights)
  return flights;
};

export const flightOptions: Flight[] = generateFlights(100);
