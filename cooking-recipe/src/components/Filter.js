import React, { useState } from 'react';
import '../styles/Filter.css';
import { MealCategory } from '../utility';

function Filter({ applyFilters }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [totalTimeMax, setTotalTimeMax] = useState('');
  const [season, setSeason] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleApplyFilters = () => {
    const filter = r =>
      (!name || r.name.toLowerCase().includes(name)) &&
      (!category || r.category === category) &&
      (!difficulty || r.difficulty <= difficulty) &&
      (!totalTimeMax || totalTimeMax >= r.preparationTime + r.cookTime) &&
      (!season || r.season.includes(season));

    applyFilters(() => filter);
  };

  const handleResetFilters = () => {
    setName('');
    setCategory('');
    setDifficulty('');
    setTotalTimeMax('');
    setSeason('');
    applyFilters(undefined);
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <div className={`whole ${filtersVisible ? 'visible' : ''}`}>
      <div className="toggle-filters" onClick={toggleFilters}>
        <div className="toggle-icon" />
      </div>
      <div className="filter-container">
        <h2>Filtrer</h2>
        <label>
      
          Recherche{' '}
          <input
            type="string"
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())}
          />
        </label>
        <label>
        <br/>
        <br/>
          Catégorie{' '}
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selection</option>
            <option value={MealCategory.entree}>Entrée</option>
            <option value={MealCategory.plat}>Plat</option>
            <option value={MealCategory.dessert}>Dessert</option>
          </select>
        </label>
        <label>
        <br/>
        <br/>
          Difficulté max{' '}
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
        <br/>
        <br/>
          Temps max{' '}
          <input
            type="number"
            value={totalTimeMax}
            onChange={(e) => setTotalTimeMax(e.target.value)}
          />
        </label>
        <label>
        <br/>
        <br/>
          Saison{' '}
          <select value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="">Selection</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="autumn">Autumn</option>
          </select>
        </label>
        <br/>
        <br/>
        <button onClick={handleApplyFilters}>Appliquer</button>
        <br/>
        <br/>
        <button onClick={handleResetFilters}>Réinitialiser</button>
      </div>
    </div>
  );
}

export default Filter;
