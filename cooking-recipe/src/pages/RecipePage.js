import React from 'react';
import { recipeList } from '../datas/recipeList';
import { useParams } from 'react-router-dom';
import '../styles/RecipePage.css';

function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function RecipePage() {
  const { name } = useParams();
  const recipe = recipeList.find((recipe) => recipe.name === name);


  return (
    <div className='recipePage'>
      <h1>{name}</h1>
      <img src={recipe.picture} className="render" alt={name} />
      <div className='textRecipe'>
        <h2>Informations :</h2>
        <p>Type : {recipe.type}</p>
        <p>Difficulté : {renderDifficulty(recipe.difficulty)}</p>
        <p>Temps de préparation : {recipe.preparationTime} min</p>
        <p>Temps de cuisson : {recipe.cookTime} min</p>
        <h2>Description :</h2>
        <p>{recipe.description}</p>
        <h2>Ingrédients :</h2>
        <p>J'arrive pas à le faire afficher !</p>
        <h2>instructions :</h2>
        <div>
          {recipe.instructions.map((instruction, index) => (<li key={index}>{instruction}</li>))}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
