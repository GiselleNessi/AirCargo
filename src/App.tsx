import React, { useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme } from './styles/ThemeProvider';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

function App() {
  const [flightOptions, setFlightOptions] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState<{
    origin: string;
    destination: string;
    startDate: string;
    endDate: string;
    weight: string;
  } | null>(null);

  const handleSearch = async (searchData: any) => {
    try {
      const response = await axios.get('/api/flights', { params: searchData });
      const { data } = response;

      // Check that we have at least 3 unique airlines in the search results
      const uniqueAirlines = new Set(data.map((flight: any) => flight.airlineName));
      if (uniqueAirlines.size < 3) {
        throw new Error('Not enough unique airlines found in search results');
      }

      // Sort the search results by price (lowest first)
      const sortedData = data.sort((a: any, b: any) => a.price - b.price);

      setSearchCriteria(searchData);
      setFlightOptions(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <SearchForm onSearch={handleSearch} />
      {flightOptions.length > 0 && searchCriteria && (
        <Results flightOptions={flightOptions} searchCriteria={searchCriteria} />
      )}
    </ThemeProvider>
  );
}


export default App;
