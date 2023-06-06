import '../App.css';
import React, { useState } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import LeSaviezVous from './LeSaviezVous';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrigoPage from '../pages/FrigoPages';
import RandomPage from '../pages/RandomPage';
import RecipePage from '../pages/RecipePage';
import Formulaire from '../pages/Formulaire';
import AccueilPage from '../pages/AccueilPage';
import Filter from './Filter';
import Bienvenue from './Bienvenue';
import GaleryPage from "../pages/GaleryPage";
import { MealCategory } from "../utility"
import RecipeItem from './RecipeItem';

function App() {

  const [filters, setFilters] = useState();

  const applyFilters = (name, category, difficulty, totalTimeMax, season) => {
    const newFilters = {
      name,
      category,
      difficulty,
      totalTimeMax,

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
          <Route path="/" element={[<Bienvenue /> ,<Filter applyFilters={applyFilters} />, <RecipeItem {...filters} />,<LeSaviezVous />]} />
          <Route path="/entrees" element={<GaleryPage recipeFilter={r => r.category === MealCategory.entree} />} />
          <Route path="/plats" element={<GaleryPage recipeFilter={r => r.category === MealCategory.plat} />} />
          <Route path="/desserts" element={<GaleryPage recipeFilter={r => r.category === MealCategory.dessert} />} />
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
