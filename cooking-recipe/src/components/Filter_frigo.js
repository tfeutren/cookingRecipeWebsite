import React, { useState } from 'react';
import '../styles/Filter_frigo.css';
import { Link } from 'react-router-dom';
import { renderDifficulty } from '../utility';

const RecipeList = ({ searchIngredients, recipeList }) => {
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (recipeList === undefined) {
    return null;
  }

  const filteredRecipes = recipeList.filter(recipe => {
    return recipe.ingredients.some(ingredient =>
      searchIngredients.some(searchIngredient =>
        removeAccents(ingredient.name.toLowerCase()).includes(removeAccents(searchIngredient.toLowerCase()))
      )
    );
  });

  return (
    <div>
      <ul>
        {filteredRecipes.length === 0 ? (
          <h1 className='error-frigo'>Pas de recette correspondante !</h1>
        ) : (
          filteredRecipes.map(({ name, difficulty, preparationTime, cookTime, picture }) => (
            <Link to={`/recette/${name}`} key={name} className="recipe-item">
              <div>
                <h2>{name}</h2>
                <p>Difficulté : {renderDifficulty(difficulty)}</p>
                <p>Temps Total : {preparationTime + cookTime} min</p>
                <img src={picture} className="picture" alt={name} />
              </div>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
}

const FrigoPage = ({ recipeList }) => {
  const [ingredients, setIngredients] = useState('');

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const inputIngredients = ingredients.split(',').map(ingredient => ingredient.trim());
    setIngredients(inputIngredients.join(', '));
  };

  return (
    <div>
      Indiquez les ingrédients que vous avez dans vos placards ou dans votre frigo pour trouver des recettes que vous pourriez faire :
      <br/>
      <strong>Merci de taper les ingrédients séparés par des virgules</strong>
      <br/>
      <br/>
      <form onSubmit={handleSearch}>
        <label>
          <input type="text" id="ingredient" value={ingredients} onChange={handleInputChange} />
        </label>
      </form>
      <RecipeList searchIngredients={ingredients.split(',').map(ingredient => ingredient.trim()) } recipeList={recipeList} />
    </div>
  );
};

export default FrigoPage;
