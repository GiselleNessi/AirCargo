# Flight Search App

This is a sample flight search app built with React and TypeScript. The app allows users to search for flights based on origin and destination airports, date range, and weight of shipment.

## Tech Specs

- React
- TypeScript
- styled-components
- Chance (for generating mock data)

## Architecture

Here's a high-level diagram of the architecture:

┌───────────────────┐        ┌───────────────────┐
│    Search Form     │        │   Flight Options   │
├───────────────────┤        ├───────────────────┤
│- Origin            │        │- Airline Name      │
│- Destination       │        │- Airline Logo      │
│- Range of Dates    │        │- Departure Date    │
│- Weight of Shipment│        │- Arrival Date      │
│- Submit Button     │        │- Price             │
└───────────────────┘        └───────────────────┘
           │                           │           
           │        ┌──────────────────┼──────────────────┐
           │        │                  │                  │
           │        │    API Request   │                  │
           │        │   (HTTP Request) │                  │
           │        │                  │                  │
           ▼        ▼                  ▼                  ▼
┌───────────────────┐        ┌───────────────────┐  Mock Backend
│     App Component  │        │  Results Component │    Server
├───────────────────┤        ├───────────────────┤
│- State (search form│        │- List of flight    │
│  values and flight │        │  options          │
│  options)          │        └───────────────────┘
│- Search Form       │                   ▲
│- Flight Options    │                   │
│- API Request Logic │                   │
└───────────────────┘                   │
                                         │
                                  ┌───────────────────┐
                                  │   JSON Data Files  │
                                  └───────────────────┘


## Getting Started

To run this app locally, follow these steps:

1. Clone this repository: git clone https://github.com/your-username/flight-search-app.git
2. Install the dependencies

### `npm install`

3. Run the app in the development mode

### `npm start`


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Sample Data

The app uses mock flight data to generate the search results. The data includes the following fields:

- **airlineName:** The name of the airline that operates the flight.
- **airlineLogo:** The URL of the airline's logo image.
- **departureDate:** The date and time of the flight's departure.
- **arrivalDate:** The date and time of the flight's arrival.
- **origin:** The airport code of the flight's origin.
- **destination:** The airport code of the flight's destination.
- **price:** The price of the flight.
- **weight:** The weight limit of the shipment, in kilograms.

Here's an example of the flight data:

  ```json
{
    "id": 0,
    "airlineName": "Delta Air Lines",
    "airlineLogo": "https://i.pravatar.cc/100?img=1",
    "departureDate": "2023-05-05T18:30:00.000Z",
    "arrivalDate": "2023-05-05T22:45:00.000Z",
    "origin": "LAX",
    "destination": "JFK",
    "price": 600,
    "weight": 20
  }
   ```




