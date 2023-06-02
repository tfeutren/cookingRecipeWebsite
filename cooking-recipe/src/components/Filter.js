import React, { useState } from 'react';
import '../styles/FilterBienvenue.css';

function Filter({ applyFilters }) {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [totalTimeMax, setTotalTimeMax] = useState('');
  const [type, setType] = useState('');
  const [season, setSeason] = useState('');

  const handleApplyFilters = () => {
    applyFilters(category, difficulty, totalTimeMax, type, season);
  };

  const handleResetFilters = () => {
    setCategory('');
    setDifficulty('');
    setTotalTimeMax('');
    setType('');
    setSeason('');
    applyFilters('', '', '', '', '');
  };

  return (
    <div className='whole'>
      <h2>Filtrer</h2>
      <label>
        Catégorie:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selection</option>
          <option value="entree">Entree</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
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
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Selection</option>
          <option value="cake">Cake</option>
          <option value="burger">Burger</option>
          <option value="omelette">Omelette</option>
        </select>
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
      <button onClick={handleResetFilters}>Rénitialiser</button>
    </div>
  );
}

export default Filter;
