import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import '../styles/AccueilPage.css';

import LeSaviezVous from '../components/LeSaviezVous';
import Filter from '../components/Filter';
import Bienvenue from '../components/Bienvenue';
import RecipeGalery from '../components/RecipeGalery';

function AccueilPage() {

  const [filters, setFilters] = useState();

  return (
    <div className="Accueil">

        <Bienvenue /> 
        <Filter applyFilters={setFilters} />
        <RecipeGalery recipeFilter={filters} />
        <LeSaviezVous />

    </div>
  );
}

export default AccueilPage;