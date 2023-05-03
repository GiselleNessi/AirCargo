import React from "react";
import styled from "styled-components";

import { Flight } from "../types/types"; // Import the Flight type

interface ResultsProps {
  flightOptions: Flight[];
  searchCriteria?: {
    origin: string;
    destination: string;
    startDate: string;
    endDate: string;
    weight: string;
  };
}

interface FlightOption {
  airlineName: string;
  airlineLogo: string;
  departureDate: string;
  arrivalDate: string;
  price: number;
  origin: string;
  destination: string;
  weight: number;
}

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ResultCard = styled.div`
  width: 300px;
  margin: 16px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AirlineLogo = styled.img`
  width: 100%;
  max-height: 80px;
  object-fit: contain;
`;

const Results: React.FC<ResultsProps> = ({ flightOptions, searchCriteria }) => {
  return (
    <div>
      <p>Showing results for:</p>
      {searchCriteria && (
        <>
          <p>
            <strong>Origin:</strong> {searchCriteria.origin}
          </p>
          <p>
            <strong>Destination:</strong> {searchCriteria.destination}
          </p>
          <p>
            <strong>Date Range:</strong> {searchCriteria.startDate} -{" "}
            {searchCriteria.endDate}
          </p>
          <p>
            <strong>Weight:</strong> {searchCriteria.weight} kg
          </p>
        </>
      )}
      <ResultContainer>
        {flightOptions.map((flightOption, index) => (
          <ResultCard key={index}>
            <h3>{flightOption.airlineName}</h3>
            <AirlineLogo src={flightOption.airlineLogo} alt="Airline logo" />
            <p>
              Departure: <strong>{flightOption.departureDate}</strong>
            </p>
            <p>
              Arrival: <strong>{flightOption.arrivalDate}</strong>
            </p>
            <p>
              Price: <strong>{flightOption.price}</strong> EUR
            </p>
            <p>
              Origin: <strong>{flightOption.origin}</strong>
            </p>
            <p>
              Destination: <strong>{flightOption.destination}</strong>
            </p>
            <p>
              Weight Limit: <strong>{flightOption.weight} kg</strong>
            </p>
            <button>Book</button>
          </ResultCard>
        ))}
      </ResultContainer>
    </div>
  );
};

export default Results;
