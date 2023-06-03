import React, { useState } from 'react';
import { MealCategory } from '../utility';

function Formulaire() {
  const [name, setName] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [visible,setVisible] = useState(false);
  const [category, setCategory] = useState('');
  const [unit, setIngredientsUnit] = useState('');
  const [quantity, setIngredientsQuantity] = useState('');
  const [type, setType] = useState('');
  const [portion, setPortion] = useState('');
  const [saison, setSaison] = useState('');
  
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeSeason = (e) => {
    setSaison(e.target.value);
  };

  const handleChangeDifficulty = (e) => {
    handleChangeDifficulty(e.target.value);
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Créer un objet recette avec les valeurs des champs
    const recette = {
      name,
      preparationTime,
      cookTime,
      difficulty,
      ingredients,
      quantity,
      unit,
      category,
      type,
      portion,
      //ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
    };

//     const Button = styled.button`
//       background-color: black;
//       color: white;
//       font-size: 20px;
//       padding: 10px 60px;
//       border-radius: 5px;
//       margin: 10px 0px;
//       cursor: pointer;
// `;

    // Envoyer l'objet recette à l'API ou effectuer d'autres opérations nécessaires
    // Réinitialiser les valeurs des champs après la soumission
    setName('');
    setPreparationTime('');
    setCookTime('');
    setDifficulty('');
    setIngredients('');
    setIngredientsQuantity('');
    setCategory('');
    setIngredientsUnit('');
    setType('');
    setPortion('');
  };

  return (
    <div>
      <h1>Ajouter une recette</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom 
          <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        </label>
        <br />
        <label>
          Temps de préparation (en minutes)
          <div>
          <input type="text" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} />
          </div>
         <br /> 
          Temps de cuisson (en minutes)  
          <div>
          <input type="text" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
          </div>
          <br />
          Portion
          <div>
          <input type="int" value={portion} onChange={(e) => setPortion(e.target.value)} />
          </div>
        </label>
        <br />
        <label>
        Difficulté{' '}
          <select value={category} onChange={handleChangeDifficulty}>
            <option value="">Sélectionnez un niveau </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <br />
        <br />
        <label>
        Saison{' '}
          <select value={category} onChange={handleChangeSeason}>
            <option value="">Sélectionnez une saison</option>
            <option value="printemps">Printemps</option>
            <option value="ete">Eté</option>
            <option value="automne">Automne</option>
            <option value="hiver">Hiver</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Catégorie{' '}
          <select value={category} onChange={handleChangeCategory}>
            <option value="">Sélectionnez une catégorie</option>
            <option value={MealCategory.entree}>Entrée</option>
            <option value={MealCategory.plat}>Plat</option>
            <option value={MealCategory.dessert}>Dessert</option>
          </select>
        </label>
        <br />
        <br />
        
        <label>
        <form onSubmit={handleSubmit}>
            {' '}Ingrédient{' '}
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            {' '}Quantité{' '}
            <input type="float" value={quantity} onChange={(e) => setIngredientsQuantity(e.target.value)} />
            {' '}Unité{' '}
            <input type="text" value={unit} onChange={(e) => setIngredientsUnit(e.target.value)} />
        </form> 
        <p>
        <button onClick={()=>setVisible(true)}>Ajouter un autre ingrédient</button>
        </p>
        </label>
        <br />
        <br />
        <label>
        <button type="submit">Ajouter</button>
      
        </label>
      </form>
    </div>
  );
}
//a faire :  ajouts ingrédients
//Instructions : comme les ingrédients, avec des etapes
//Recuperer les donnees et modifier le json
//embellir

export default Formulaire;
