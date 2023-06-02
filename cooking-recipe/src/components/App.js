import '../App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import Banner from './Banner';
import RecipeItem from './RecipeItem';
import Footer from './Footer';
import EntreesPage from '../pages/EntreePage';
import PlatsPage from '../pages/PlatsPage';
import DessertsPage from '../pages/DessertsPage';
import FrigoPage from '../pages/FrigoPages';
import RandomPage from '../pages/RandomPage';
import RecipePage from '../pages/RecipePage';
import Formulaire from '../pages/Formulaire';
import AccueilPage from '../pages/AccueilPage';
import Filter from './Filter';
import Bienvenue from './Bienvenue';

function App() {

  const [filters, setFilters] = useState({});

  const applyFilters = (category, difficulty, totalTimeMax, type, season) => {
    const newFilters = {
      category,
      difficulty,
      totalTimeMax,
      type,
      season
    };

    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Router>
        <Banner />

        

        {/* Define the link page */}
        <Routes>
          <Route path="/" element={[<Bienvenue /> ,<Filter applyFilters={applyFilters} />, <RecipeItem {...filters} />]} />
          <Route path="/entrees" element={<EntreesPage />} />
          <Route path="/plats" element={<PlatsPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
          <Route path="/frigo" element={<FrigoPage />} />
          <Route path="/aleatoire" element={<RandomPage />} />
          <Route path="/recipe/:name" element={<RecipePage />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/accueil" element={<AccueilPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
