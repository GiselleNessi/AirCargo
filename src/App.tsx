import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme } from './styles/ThemeProvider';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import { flightOptions } from './data/flightOptions';
import { filterFlights } from './utils/filterFlights';
import { Flight, SearchData } from './types/types'; // Import the Flight type

function App() {
  const [searchCriteria, setSearchCriteria] = useState<SearchData | null>(null);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);

  const handleSearch = (searchData: SearchData) => {
    try {
      // Filter flights based on the search criteria
      const filteredData = filterFlights(flightOptions, searchData) as Flight[];


      // Check that we have at least 3 unique airlines in the search results
      const uniqueAirlines = new Set(filteredData.map((flight: any) => flight.airlineName));
      if (uniqueAirlines.size < 3) {
        throw new Error('Not enough unique airlines found in search results');
      }

      // Sort the search results by price (lowest first)
      const sortedData = filteredData.sort((a: Flight, b: Flight) => a.price - b.price);


      setSearchCriteria(searchData);
      setFilteredFlights(sortedData); // Update this line
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <SearchForm onSearch={handleSearch} />
      {filteredFlights.length > 0 && searchCriteria && (
    <Results flightOptions={filteredFlights} searchCriteria={{...searchCriteria, weight: searchCriteria.weight.toString()}} /> // Convert weight to string
  )}
    </ThemeProvider>
  );
}

export default App;
