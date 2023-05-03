import Chance from "chance";
import { Flight } from "../types/types";

const chance = new Chance();

// List of airport codes
const airportCodes: string[] = [
  "JFK",
"LAX",
"LHR",
"CDG",
"SYD",
"HND",
"DEN",
"SFO",
"ORD",
"DUB",
"AMS",
"BOM",
"DEL",
"HKG",
"SIN",
"ICN",
"PEK",
"SHA",
"NRT",
"FCO",
"MXP",
"IST",
"DXB",
"BKK",
"CUN",
"PTY",
"BOG",
"GRU",
"EZE",
"LIM",
"JNB",
"CPT",
"CAI",
"TPE",
"AKL",
"BNE",
"MEL",
"PER",
"YYZ",
"YVR",
"YUL",
"YYC",
"YOW",
"MEX",
"CUN",
"UIO",
"LIM",
"SCL",
"BOG",
"EZE",
"GRU",
"CPT",
"JNB",
"SEZ",
"MLE",
"BAH",
"DOH",
"RUH",
"KWI",
"DXB",
"JED",
"BEY",
"TLV",
"ATH",
"BCN",
"BRU",
"BUD",
"CPH",
"DUB",
"FCO",
"FRA",
"HEL",
"IST",
"LIS",
"LHR",
"MAD",
"MUC",
"OSL",
"CDG",
"PRG",
"ARN",
"VIE",
"ZRH"
  // Add more airport codes as needed
];

const generateFlights = (count: number, uniqueAirlines: number): Flight[] => {
  const flights: Flight[] = [];
  const airlines: string[] = [];

  while (airlines.length < uniqueAirlines) {
    const airlineName = chance.company();

    if (!airlines.includes(airlineName)) {
      airlines.push(airlineName);
    }
  }

  for (let i = 0; i < count; i++) {
    const airlineName = airlines[i % airlines.length];

    const airlineLogo = chance.avatar({ protocol: "https" });
    const departureDate = new Date(
      chance.date({ string: true, american: false })
    );
    const departureMin = new Date(
      departureDate.getTime() + 1 * 60 * 60 * 1000
    );
    const departureMax = new Date(
      departureDate.getTime() + 5 * 60 * 60 * 1000
    );
    const arrivalDate = new Date(
      chance.date({
        string: true,
        american: false,
        min: departureMin,
        max: departureMax,
      })
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
    };

    flights.push(flight);
  }
console.log(flights)
  return flights;
};

export const flightOptions: Flight[] = generateFlights(100, 5);
