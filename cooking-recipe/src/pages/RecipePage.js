import React from 'react';
import { useParams } from 'react-router-dom';

import { recipeList } from '../datas/recipeList';
import '../styles/RecipePage.css';
import { renderDifficulty } from "../utility"

function RecipePage() {
  const { name } = useParams();
  const recipe = recipeList.find((recipe) => recipe.name === name);


  return (
    <div className='recipePage'>
      <h1>{name}</h1>
      <img src={recipe.picture} className="render" alt={name} />
      <div className='textRecipe'>
        <h2>Informations :</h2>

          <p>Difficulté : {renderDifficulty(recipe.difficulty)}</p>

          <p>Temps de préparation : {recipe.preparationTime} min</p>

          <p>Temps de cuisson : {recipe.cookTime} min</p>

          <h2>Description :</h2>
          <p>{recipe.description}</p>

          <h2>Ingrédients :</h2>
          <p>Pour {recipe.portions} personnes : </p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Quantité</th>
                  <th>Unité</th>
                </tr>
              </thead>
              <tbody>
                {recipe.ingredients.map((ingredient, index) => (
                  <tr key={index}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Instructions :</h2>
          <div>
            {recipe.instructions.map((instruction, index) => (<li key={index}>{instruction}</li>))}
          </div>

      </div>
    </div>
  );
}

export default RecipePage;
