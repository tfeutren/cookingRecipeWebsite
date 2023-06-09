import './App.css';
import React, { useState } from 'react';
import AccueilPage from './pages/AccueilPage';

function App() {

  const [filters, setFilters] = useState();

  return (
    <AccueilPage key={1}/>
  );
}

export default App;
