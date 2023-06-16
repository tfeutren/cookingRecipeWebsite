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
    <div className={`filter ${filtersVisible ? 'visible' : ''}`}>
      <div className="toggle-filters" onClick={toggleFilters}>
        <div className="toggle-icon" />
      </div>
      <div className="filter-container">
       <h2 className="filter-title">Filtrer</h2>
        <label className='label-police'>
          Recherche{' '}
          <input
            type="string"
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())}
          />
        </label>
        <label className='label-category'>
        <br/>
        <br/>
          <select value={category} id="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Catégorie</option>
            <option value={MealCategory.entree}>Entrée</option>
            <option value={MealCategory.plat}>Plat</option>
            <option value={MealCategory.dessert}>Dessert</option>
          </select>
        </label>
        <br/>
        <br/>
        <label className='label-difficulty'>
          <select value={difficulty} id = "difficulty" onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">Difficulté max</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label className='label-police'>
        <br/>
        <br/>
          Temps max{' '}
          <br/>
          <input
            type="number"
            value={totalTimeMax}
            onChange={(e) => setTotalTimeMax(e.target.value)}
          />
        </label>
        <label className='label-season'>
        <br/>
        <br/>
          <select value={season} id = "season" onChange={(e) => setSeason(e.target.value)}>
            <option value="">Saison</option>
            <option value="summer">Ete</option>
            <option value="winter">Hiver</option>
            <option value="spring">Printemps</option>
            <option value="autumn">Automne</option>
          </select>
        </label>
        <br/>
        <br/>
        <button className = 'filter-button' onClick={handleApplyFilters}>Appliquer</button>
        <br/>
        <br/>
        <button className = 'filter-button' onClick={handleResetFilters}>Réinitialiser</button>
      </div>
    </div>
  );
}

export default Filter;
