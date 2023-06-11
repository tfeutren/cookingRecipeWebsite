import React, { useState } from 'react';
import '../styles/Filter.css';
import { MealCategory } from '../utility';
import { recipeList } from '../datas/recipeList';

function Filter_frigo() {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

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

    // Filter recipes based on selected ingredients
    useState(() => {
      const filtered = recipeList.filter(recipe =>
        recipe.ingredients.map((ingredient, index) =>
          selectedIngredients.includes(ingredient.name)
        )
      );
      setFilteredRecipes(filtered);
    }, [selectedIngredients]);
  
    return (
      <div className="Filter_frigo">
        Sélectionnez les ingrédients que vous avez dans vos placards ou dans votre frigo :
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
        <h2>Ingrédients sélectionnés :</h2>
        <ul>
          {selectedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Recettes correspondantes :</h2>
        <ul>
          {filteredRecipes.map((recipe, index) => (
            <li key={index}>{recipe.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Filter_frigo;