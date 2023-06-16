import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import AccueilPage from './pages/AccueilPage';
import FrigoPage from './pages/FrigoPage';
import RecipePage from './pages/RecipePage';
import Formulaire from './pages/Formulaire';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { MealCategory } from "./utility"

import RecipeGalery from './components/RecipeGalery';

function App() {

  return (
    <div className='App'>
      <Router>
        <div className='content'>
          <Banner />
          {/* Define the link pages */}
          <Routes>
            <Route path="/" element={<AccueilPage />} />
            <Route path="/entrees" element={<RecipeGalery recipeFilter={r => r.category === MealCategory.entree} />} />
            <Route path="/plats" element={<RecipeGalery recipeFilter={r => r.category === MealCategory.plat} />} />
            <Route path="/desserts" element={<RecipeGalery recipeFilter={r => r.category === MealCategory.dessert} />} />
            <Route path="/frigo" element={<FrigoPage />} />
            <Route path="/recette/:name" element={<RecipePage />} />
            <Route path="/formulaire" element={<Formulaire />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
