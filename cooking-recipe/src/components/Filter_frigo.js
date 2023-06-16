import React, { useState, useEffect } from 'react';
import '../styles/Filter_frigo.css';
import { Link } from 'react-router-dom';
import { renderDifficulty } from '../utility';
import { recipeList } from '../datas/recipeList';

const RecipeList = ({ searchIngredient }) => {
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filteredRecipes = recipeList.filter(recipe => {
    return recipe.ingredients.some(ingredient =>
      removeAccents(ingredient.name.toLowerCase()).includes(removeAccents(searchIngredient.toLowerCase()))
    );
  });

  return (
    <div>
      <ul>
        {filteredRecipes.length === 0 ? (
           <h1 className='error-frigo'>Pas de recette correspondante !</h1>
        ) : filteredRecipes.map(({ name, difficulty, preparationTime, cookTime, picture }) => (
          <Link to={`/recette/${name}`} key={name} className="recipe-item">
            <div>
              <h2>{name}</h2>
              <p>Difficulté : {renderDifficulty(difficulty)}</p>
              <p>Temps Total : {preparationTime + cookTime} min</p>
              <img src={picture} className="picture" alt={name} />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

const FrigoPage = () => {
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  return (
    <div>
       Sélectionnez les ingrédients que vous avez dans vos placards ou dans votre frigo :
       <br/>
      <strong>Merci de taper qu'un ingrédient à la fois</strong>
      <br/>
      <br/>
      <form>
        <label>
          Nom :
          <input type="text" value={ingredient} onChange={handleInputChange} />
        </label>
      </form>
      <RecipeList searchIngredient={ingredient} />
    </div>
  );
};

export default FrigoPage;
