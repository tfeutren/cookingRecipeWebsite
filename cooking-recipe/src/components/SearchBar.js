import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { renderDifficulty } from '../utility';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GaleryPage from "../pages/GaleryPage";

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const searchTerm = event.target.value.toLowerCase();
            const searchResults = recipeList.filter((recipe) => {
              return recipe.name.toLowerCase().includes(searchTerm);
            });
            
          console.log('Search results:', searchResults);
          // Do something with the search results
            return (
                <div>
                  <ul>
                    {searchResults.map(({ name, difficulty, preparationTime, cookTime, picture }) => (
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
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = (searchTerm) => {
        const searchResults = recipeList.filter((recipe) => {
          const recipeValues = Object.values(recipe);
          return recipeValues.some((value) =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
      
        console.log('Search results:', searchResults);
        // Do something with the search results
      };

    return (
        <div className='search-box'>
            <input
                className="search-text"
                type="text"
                placeholder="Search Anything"
                value={searchValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    )
}

export default SearchBar;