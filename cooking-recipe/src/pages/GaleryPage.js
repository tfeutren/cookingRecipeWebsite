import React from 'react';
import RecipeGalery from '../components/RecipeGalery';

function GaleryPage({ recipeFilter }) {
    
    return (
        <RecipeGalery recipeFilter={recipeFilter} />
    );
}

export default GaleryPage;