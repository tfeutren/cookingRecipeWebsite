import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import '../styles/AccueilPage.css';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import LeSaviezVous from '../components/LeSaviezVous';
import Filter from '../components/Filter';
import Bienvenue from '../components/Bienvenue';
import RecipeGalery from '../components/RecipeGalery';

import FrigoPage from './FrigoPage';
import RecipePage from './RecipePage';
import Formulaire from './Formulaire';
import { MealCategory } from "../utility"

function AccueilPage() {

  const [filters, setFilters] = useState();

  return (
    <div className="Accueil">
      <Router>
        <Banner />

        {/* Define the link page */}
        <Routes>
          <Route path="/" element={[<Bienvenue /> ,<Filter applyFilters={setFilters} />, <RecipeGalery recipeFilter={filters} />,<LeSaviezVous />]} />
          <Route path="/entrees" element={<RecipeGalery recipeFilter={r => r.category === MealCategory.entree} />} />
          <Route path="/plats" element={<RecipeGalery recipeFilter={r => r.category === MealCategory.plat} />} />
          <Route path="/desserts" element={<RecipeGalery recipeFilter={r => r.category === MealCategory.dessert} />} />
          <Route path="/frigo" element={<FrigoPage />} />
          <Route path="/recette/:name" element={<RecipePage />} />
          <Route path="/formulaire" element={<Formulaire />} />
          {/* <Route path="/accueil" element={<AccueilPage />} /> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default AccueilPage;