import React, { useState } from 'react';
import '../styles/FilterBienvenue.css';

function Bienvenue() {
  return (
    <div className='whole'>
      <h2>Tu Cuisines</h2>
        <p>Bienvenue sur notre site de recettes de cuisine, vous trouverez ici des recettes de cuisine pour tous les goûts et tous les niveaux.</p>
        <p>Vous pouvez rechercher une recette par nom, catégorie, difficulté, temps de préparation, type et saison</p>
        <p>Et également ajouter une recette !</p>
    </div>
  );
}

export default Bienvenue;
