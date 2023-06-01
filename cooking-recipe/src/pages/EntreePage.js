import React from 'react';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';

function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function EntreesPage() {
  let filteredRecipes = recipeList;

  return (
    <div>
      <h1>Voici la page des Entrées !</h1>
      <ul>
      {filteredRecipes
        .filter(recipe => recipe.category === 'entree')
        .map(({ name, difficulty, preparationTime, cookTime, picture }) => (
          <Link to={`/recipe/${name}`} key={name} className="recipe-item">
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
}

export default EntreesPage;
