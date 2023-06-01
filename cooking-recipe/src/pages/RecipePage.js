import React from 'react';
import { recipeList } from '../datas/recipeList';
import { useParams } from 'react-router-dom';

function renderDifficulty(difficulty) {
    const fireSymbol = '🔥';
    return fireSymbol.repeat(difficulty);
  }

function RecipePage() {
    const { name } = useParams();
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
  

export default RecipePage;
