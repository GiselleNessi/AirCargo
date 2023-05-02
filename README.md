# Air Cargo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

## High-level example of application architecture

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


