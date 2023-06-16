import React, { useState } from 'react';
import '../styles/Filter_frigo.css';
import { Link } from 'react-router-dom';
import { renderDifficulty } from '../utility';
import { recipeList } from '../datas/recipeList';

const RecipeList = ({ searchIngredients }) => {
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

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

const FrigoPage = () => {
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
      Sélectionnez les ingrédients que vous avez dans vos placards ou dans votre frigo :
      <br/>
      <strong>Merci de taper les ingrédients séparés par des virgules</strong>
      <br/>
      <br/>
      <form onSubmit={handleSearch}>
        <label>
          <input type="text" id="ingredient" value={ingredients} onChange={handleInputChange} />
        </label>
      </form>
      <RecipeList searchIngredients={ingredients.split(',').map(ingredient => ingredient.trim())} />
    </div>
  );
};

export default FrigoPage;
