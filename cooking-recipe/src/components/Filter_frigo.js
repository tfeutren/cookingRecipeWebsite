import React, { useState, useEffect } from 'react';
import '../styles/Filter_frigo.css';
import { Link } from 'react-router-dom';
import { renderDifficulty } from '../utility';
import { recipeList } from '../datas/recipeList';

function Filter_frigo() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    // Filter recipes based on selected ingredients
    const filtered = recipeList.filter(recipe =>
      recipe.ingredients.some(ingredient =>
        selectedIngredients.includes(ingredient.name)
      )
    );
    setFilteredRecipes(filtered);
  }, [selectedIngredients]);

  const handleCheckboxChange = (event) => {
    const ingredient = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    } else {
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    }
  };

  const uniqueIngredients = Array.from(
    new Set(
      recipeList.flatMap(recipe =>
        recipe.ingredients.map(ingredient => ingredient.name)
      )
    )
  );

  return (
    <div className= "Filter_frigo">
      Sélectionnez les ingrédients que vous avez dans vos placards ou dans votre frigo :
      <br/>
      <br/>
      <div className="topping">
        {uniqueIngredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`topping-${index}`}
              name={`topping-${index}`}
              value={ingredient}
              checked={selectedIngredients.includes(ingredient)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={`topping-${index}`}>{ingredient}</label>
          </div>
        ))}
      </div>
      <ul>
        {filteredRecipes.length === 0 ? (
          <h1 className ='error-frigo'>Pas de recette correspondante !</h1>
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
}

export default Filter_frigo;
