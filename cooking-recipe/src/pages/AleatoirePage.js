import React from 'react';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';

function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function getRandom() {
  const randomIndex = Math.floor(Math.random() * recipeList.length);
  return recipeList[randomIndex].name;
}

function AleatoirePage() {
    let filteredRecipes = recipeList;
    const name = getRandom();
    const recipe = recipeList.find((recipe) => recipe.name === name);
  
    return (
      <div>
        <h1>{name}</h1>
        <img src={recipe.picture} className="render" alt={name} />
        <p>{recipe.description}</p>
        <p>Difficulté : {renderDifficulty(recipe.difficulty)}</p>
        <p>Temps Total : {recipe.preparationTime + recipe.cookTime} min</p>
      </div>
    );
}

export default AleatoirePage;