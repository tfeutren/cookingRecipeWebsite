import React, { useState } from 'react';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';
import { renderDifficulty } from '../utility';
import Filter_frigo from '../components/Filter_frigo';

const RecipeList = ({ searchIngredient }) => {
  // Filter recipes based on the specified ingredient
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  // normalize: decomposes accented characters into a combination of the base character and marks
  // replace: takes a regular expression as the first argument, which matches any Unicode character in the range \u0300-\u036f
  // g flag: perform a global search and replace

  const filteredRecipes = recipeList.filter(recipe => {
    return recipe.ingredients.some(ingredient =>
      removeAccents(ingredient.name.toLowerCase()).includes(removeAccents(searchIngredient.toLowerCase()))
    );
  });
  // some: method that tests whether at least one element in the array passes the provided condition

  return (
    <div>
    <Filter_frigo />
    <ul>
      {filteredRecipes.length === 0 ? (
        <h1 className='error'>Pas de recette correspondante !</h1>
      ) : filteredRecipes.map(({ name, difficulty, preparationTime, cookTime, picture }) => (
        <Link to={`/recette/${name}`} key={name} className="recipe-item">
          <div>
            <h2>{name}</h2>
            <p>Difficulté : {renderDifficulty(difficulty)}</p>
            <p>Temps Total : {preparationTime + cookTime} min</p>
            <img src={picture} className="render" alt={name} />
          </div>
        </Link>
      ))}
    </ul>
  </div>
  );
};

const FrigoPage = () => {
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = event => {
    setIngredient(event.target.value);
  };

  return (
    <div>
      <h1>Voici la page Frigo !</h1>
        <label>
          Nom :
          <input type="text" value={ingredient} onChange={handleInputChange} />
        </label>
        
      <RecipeList searchIngredient={ingredient} />
    </div>
  );
};

export default FrigoPage;