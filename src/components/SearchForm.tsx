import React, { useState } from 'react';
import { SearchData } from '../types/types';

interface SearchFormProps {
  onSearch: (results: SearchData) => void;
}

const airportCodes: string[] = ["JFK", "LAX", "SFO", "ORD"];

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState('');
  
    const handleSearch = () => {
      if (!origin || !destination || !startDate || !endDate || !weight) {
        setError('Please fill out all fields.');
        return;
      }
      if (new Date(endDate).getTime() - new Date(startDate).getTime() > 10 * 24 * 60 * 60 * 1000) {
        setError('Date range should be up to 10 days.');
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
    <div>
      <label>
        Origin Airport:
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
          <option value="">--Select an airport--</option>
          {airportCodes.map((code) => (
            <option value={code} key={code}>{code}</option>
          ))}
        </select>
      </label>
      <label>
        Destination Airport:
        <select value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value="">--Select an airport--</option>
          {airportCodes.map((code) => (
            <option value={code} key={code}>{code}</option>
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
      <label>
        Weight of Shipment (kg):
        <input
          type="number"
          placeholder="e.g. 500"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
