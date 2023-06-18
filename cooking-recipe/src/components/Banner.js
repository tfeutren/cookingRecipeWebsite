import { useState } from 'react';
import logo from '../assets/logo2-sans-fond.png'
import '../styles/Banner.css'
import { Link } from 'react-router-dom';


function Banner({ children, recipeList }) {
    const [recipeName, setSelectedRecipeName] = useState("")

    if (recipeList === undefined) {
        return null;
    }

    const getRandomRecipe = () => {
        let randomIndex = Math.floor(Math.random() * recipeList.length);
        if (recipeName) {
            const lastRandomRecipeIndex = recipeList.findIndex(r => r.name === recipeName)
            if (randomIndex === lastRandomRecipeIndex) {
                console.log("Switched recipe to avoid repetition");
                randomIndex = (randomIndex+1) % recipeList.length; 
            }
        }
        return recipeList[randomIndex];
    }
    
    const randomRecipeReload = (event) => {
        const recipe = getRandomRecipe();
        if (recipe !== undefined)
            setSelectedRecipeName(recipe.name)
        window.scrollTo(0, 0)
    };

    if (!recipeName) {
        randomRecipeReload()
    }

    return (
        <div className='banner'>
            <Link to="/entrees" className='link'>Entrées</Link>
            <Link to="/plats" className='link'>Plats</Link>
            <Link to="/desserts" className='link'>Desserts</Link>
            <Link to="/frigo" className='link'>Frigo</Link>
            <Link to={`/recette/${recipeName}`} className='link' onClick={randomRecipeReload}>Aléatoire</Link>
            <Link to="/formulaire" className='link'>Ajouter une recette</Link>
            <Link to="/"><img src={logo} alt='TuCuisines' className='logo' /></Link>
            {children}
        </div>
    )
}

export default Banner