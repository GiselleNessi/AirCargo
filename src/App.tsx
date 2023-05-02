import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';


const App: React.FC = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (searchParams: any) => {
    try {
      const response = await axios.get('/api/flights', {
        params: searchParams,
      });
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default App;
