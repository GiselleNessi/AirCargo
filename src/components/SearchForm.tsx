import React, { useState } from "react";
import { SearchData } from "../types/types";
import styled from "styled-components";

interface SearchFormProps {
  onSearch: (results: SearchData) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
`;

// List of air codes
const airportCodes: string[] = ["JFK", "LAX", "SFO", "ORD"];

// List of weight limits
const weightLimits: string[] = ["10", "20", "30", "40", "50+", "100+"];

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!origin || !destination || !startDate || !endDate || !weight) {
      setError("Please fill out all fields.");
      return;
    }
    if (
      new Date(endDate).getTime() - new Date(startDate).getTime() >
      10 * 24 * 60 * 60 * 1000
    ) {
      setError("Date range should be up to 10 days.");
      return;
    }
    const startDateTime = new Date(`${startDate}T00:00:00`);
    const endDateTime = new Date(`${endDate}T23:59:59`);
    const searchData: SearchData = {
      origin,
      destination,
      startDate: startDateTime.toISOString(),
      endDate: endDateTime.toISOString(),
      weight: parseInt(weight, 10),
    };
    onSearch(searchData);
  };

  return (
    <Container>
      <div>
        <label>
          Origin Airport:
          <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
            <option value="">--Select an airport--</option>
            {airportCodes.map((code) => (
              <option value={code} key={code}>
                {code}
              </option>
            ))}
          </select>
        </label>
        <label>
          Destination Airport:
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">--Select an airport--</option>
            {airportCodes.map((code) => (
              <option value={code} key={code}>
                {code}
              </option>
            ))}
          </select>
        </label>
        <label>
          Start Date:
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Weight of Shipment (kg):
          <select value={weight} onChange={(e) => setWeight(e.target.value)}>
            <option value="">--Select weight limit--</option>
            {weightLimits.map((limit) => (
              <option value={limit} key={limit}>
                {limit}
              </option>
            ))}
          </select>
        </label>
        {error && <p>{error}</p>}
        <button onClick={handleSearch}>Search</button>
      </div>
    </Container>
  );
};

export default SearchForm;
