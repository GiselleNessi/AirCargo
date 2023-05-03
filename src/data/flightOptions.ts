// flightOptions.ts
import { Flight } from '../types/types'; // Import Flight type from your types file

export const flightOptions: Flight[] = [
   {
    "airlineName": "Airline A",
    "airlineLogo": "https://www.example.com/airlineA.png",
    "departureDate": "2023-06-01T12:00:00Z",
    "arrivalDate": "2023-06-01T18:00:00Z",
    "price": 200,
    "origin": "LAX",
    "destination": "JFK",
    "weight": 20
  },
  {
    "airlineName": "Airline A",
    "airlineLogo": "https://www.example.com/airlineA.png",
    "departureDate": "2023-06-02T08:00:00Z",
    "arrivalDate": "2023-06-02T14:00:00Z",
    "price": 250,
    "origin": "JFK",
    "destination": "LAX",
    "weight": 25
  },
  {
    "airlineName": "Airline B",
    "airlineLogo": "https://www.example.com/airlineB.png",
    "departureDate": "2023-06-03T10:00:00Z",
    "arrivalDate": "2023-06-03T16:00:00Z",
    "price": 220,
    "origin": "MAD",
    "destination": "CDG",
    "weight": 15
  },
  {
    "airlineName": "Airline B",
    "airlineLogo": "https://www.example.com/airlineB.png",
    "departureDate": "2023-06-04T09:00:00Z",
    "arrivalDate": "2023-06-04T15:00:00Z",
    "price": 190,
    "origin": "CDG",
    "destination": "MAD",
    "weight": 10
  },
  {
    "airlineName": "Airline C",
    "airlineLogo": "https://www.example.com/airlineC.png",
    "departureDate": "2023-06-05T07:00:00Z",
    "arrivalDate": "2023-06-05T13:00:00Z",
    "price": 280,
    "origin": "JFK",
    "destination": "CDG",
    "weight": 30
  },
  {
    "airlineName": "Airline C",
    "airlineLogo": "https://www.example.com/airlineC.png",
    "departureDate": "2023-06-06T14:00:00Z",
    "arrivalDate": "2023-06-06T20:00:00Z",
    "price": 300,
    "origin": "CDG",
    "destination": "JFK",
    "weight": 35
  },
  {
    "airlineName": "Airline D",
    "airlineLogo": "https://www.example.com/airlineD.png",
    "departureDate": "2023-06-07T11:00:00Z",
    "arrivalDate": "2023-06-07T17:00:00Z",
    "price": 240,
    "origin": "LAX",
    "destination": "CDG",
    "weight": 20
  },
];