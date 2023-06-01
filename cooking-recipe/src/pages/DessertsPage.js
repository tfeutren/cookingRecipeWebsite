import React from 'react';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';

function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function DessertsPage() {
  let filteredRecipes = recipeList;

  return (
    <div>
      <h1>Voici la page des Desserts !</h1>
      <ul>
      {filteredRecipes
        .filter(recipe => recipe.category === 'dessert')
        .map(({ name, difficulty, preparationTime, cookTime, picture }) => (
          <div className="recipe-item" key={name}>
              <h2>{name}</h2>
              <p>Difficulté : {renderDifficulty(difficulty)}</p>
              <p>Temps Total : {preparationTime + cookTime} min</p>
			<Link to={`/recipe/${name}`}>  
              <img src={picture} className="render" alt={name} />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DessertsPage;