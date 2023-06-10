import React, { useState } from 'react';
import '../styles/Filter.css';
import { MealCategory } from '../utility';
import { recipeList } from '../datas/recipeList';

function Filter_frigo() {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };

    const uniqueIngredients = Array.from(
        new Set(
          recipeList.flatMap(recipe =>
            recipe.ingredients.map(ingredient => ingredient.name)
          )
        )
      );
  
      return (
        <div className="Filter_frigo">
          Sélectionnez vos ingrédients :
          <div className="topping">
            {uniqueIngredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value={ingredient}
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                <label htmlFor="topping">{ingredient}</label>
              </div>
            ))}
          </div>
        </div>
      );
      
  }

export default Filter_frigo;