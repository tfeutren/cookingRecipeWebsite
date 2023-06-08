import React, { useState } from 'react';
import '../styles/FilterBienvenue.css';
import { MealCategory } from '../utility';

function Filter({ applyFilters }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [totalTimeMax, setTotalTimeMax] = useState('');
  const [season, setSeason] = useState('');

  const handleApplyFilters = () => {
    const filter = r => ((!name || r.name.toLowerCase().includes(name)) &&
        (!category || r.category === category) &&
        (!difficulty || r.difficulty <= difficulty) &&
        (!totalTimeMax || totalTimeMax >= r.preparationTime + r.cookTime) &&
        (!season || r.season.includes(season)));

    applyFilters(() => filter);
  };

  const handleResetFilters = () => {
    setName('');
    setCategory('');
    setDifficulty('');
    setTotalTimeMax('');
    setSeason('');
    applyFilters(undefined)
  };

  return (
    <div className='whole'>
      <h2>Filtrer</h2>
      <label>
        Recherche:
        <input
          type="string"
          value={name}
          onChange={(e) => setName(e.target.value.toLowerCase())}
        />
      </label>
      <label>
        Catégorie:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selection</option>
          <option value={MealCategory.entree}>Entree</option>
          <option value={MealCategory.plat}>Plat</option>
          <option value={MealCategory.dessert}>Dessert</option>
        </select>
      </label>
      <label>
        Difficulté max:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <label>
        Temps max:
        <input
          type="number"
          value={totalTimeMax}
          onChange={(e) => setTotalTimeMax(e.target.value)}
        />
      </label>
      <label>
        Saison:
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="">Selection</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="autumn">Autumn</option>
        </select>
      </label>
      <button onClick={handleApplyFilters}>Appliquer</button>
      <button onClick={handleResetFilters}>Réinitialiser</button>
    </div>
  );
}

export default Filter;
