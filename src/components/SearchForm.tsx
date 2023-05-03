import React, { useState } from 'react';
import { SearchData } from '../types/types';

interface SearchFormProps {
  onSearch: (results: SearchData) => void;
}

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
        const searchData: SearchData = {
          origin,
          destination,
          startDate,
          endDate,
          weight: parseInt(weight, 10),
        };
        onSearch(searchData);
      };

  return (
    <div>
      <label>
        Origin Airport (e.g. LAX):
        <input
          type="text"
          placeholder="e.g. LAX"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </label>
      <label>
        Destination Airport (e.g. JFK):
        <input
          type="text"
          placeholder="e.g. JFK"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
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


