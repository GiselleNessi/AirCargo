import Chance from "chance";
import { Flight } from "../types/types";

const chance = new Chance();

// List of airport codes
const airportCodes: string[] = ["JFK", "LAX", "SFO", "ORD"];

// List of airline names
const airlineNames: string[] = [
  "Delta Air Lines",
  "United Airlines",
  "American Airlines",
  "Southwest Airlines",
  "JetBlue Airways",
];

// List of weight limits
const weightLimits: string[] = ["10", "20", "30", "40", "50+", "100+"];

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
      departureDate.getTime() +
        chance.integer({ min: 1, max: 10 }) * 60 * 60 * 1000
    );

    const price = chance.pickone([
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    ]);

    // Generate a 3-letter airport code for origin and destination
    const originAirport =
      airportCodes[Math.floor(Math.random() * airportCodes.length)];
    let destinationAirport = originAirport;
    while (destinationAirport === originAirport) {
      destinationAirport =
        airportCodes[Math.floor(Math.random() * airportCodes.length)];
    }

    const weight = chance.pickone([10, 20, 30, 40]);

    // Generate flights with same origin, destination, dates, and weight but different airlines, times, and prices
    const numFlights = chance.integer({ min: 1, max: 3 });
    for (let j = 0; j < numFlights; j++) {
      const flight: Flight = {
        airlineName: airlineNames[(i + j) % airlineNames.length],
        airlineLogo,
        departureDate: new Date(departureDate.getTime() + j * 60 * 60 * 1000),
        arrivalDate: new Date(
          departureDate.getTime() + (j + 1) * 60 * 60 * 1000
        ),
        price: price - 50 * j,
        origin: originAirport,
        destination: destinationAirport,
        weight,
        id: i * 10 + j,
      };

      flights.push(flight);
    }
  }

  console.log('Flights sample:', flights);
  return flights;
};

export const flightOptions: Flight[] = generateFlights(100);
