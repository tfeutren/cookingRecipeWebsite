import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

import AccueilPage from './pages/AccueilPage';
import FrigoPage from './pages/FrigoPage';
import RecipePage from './pages/RecipePage';
import Formulaire from './pages/Formulaire';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { MealCategory } from "./utility"
import RecipeGalery from './components/RecipeGalery';

function App() {
  const [recipes, setRecipeList] = useState()

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch('http://localhost:8000/')
      if (response.ok) {
        const recipeList = JSON.parse(await response.json())
        setRecipeList(recipeList)
        console.info("Fetched recipe list successfully.")
      } else {
        console.error("Failed loading recipeList from server.")
        return;
      }
    }
    if (recipes === undefined) {
      fetchRecipes()
    }
  }, []);

  return (
    <div className='App'>
      <Router>
        <div className='content'>
          <Banner recipeList={recipes} />
          {/* Define the link pages */}
          <Routes>
            <Route path="/" element={<AccueilPage recipeList={recipes} />} />
            <Route path="/entrees"
              element={<RecipeGalery recipeFilter={r => r.category === MealCategory.entree} recipeList={recipes} />} />
            <Route path="/plats"
              element={<RecipeGalery recipeFilter={r => r.category === MealCategory.plat} recipeList={recipes} />} />
            <Route path="/desserts"
              element={<RecipeGalery recipeFilter={r => r.category === MealCategory.dessert} recipeList={recipes} />} />
            <Route path="/frigo" element={<FrigoPage recipeList={recipes} />} />
            <Route path="/recette/:name" element={<RecipePage recipeList={recipes} />} />
            <Route path="/formulaire" element={<Formulaire recipeListSetter={setRecipeList} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
