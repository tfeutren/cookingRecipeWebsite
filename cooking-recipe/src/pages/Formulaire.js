import React, { useState } from 'react';
import { MealCategory } from '../utility';
import '../styles/Formulaire.css';


function Formulaire({recipeListSetter}) {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [unit, setUnit] = useState([]);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [portions, setportions] = useState('');
  const [saison, setSaison] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [description, setDescription] = useState('');

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: '' }]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleIngredientChange = (index, property, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][property] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveInstruction = (index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions.splice(index, 1);
    setInstructions(updatedInstructions);
  };

  const handleInstructionChange = (index, value) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = value;
    setInstructions(updatedInstructions);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeSeason = (e) => {
    setSaison(e.target.value);
  };

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = () => {
    alert(
      "Votre recette a bien été enregistrée !"   
    );

    // Créer un objet recette avec les valeurs des champs
    const newRecipe = {
      name,
      picture,
      preparationTime,
      cookTime,
      difficulty,
      ingredients,
      quantity,
      unit,
      category,
      instructions,
      type,
      portions,
      description
    };

    // Locally updates the recipe list.
    recipeListSetter(currentList => [...currentList, newRecipe])

    // Updates the list stored in the backend.
    fetch('http://localhost:8000/',{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })

    // Réinitialiser les valeurs des champs après la soumission
    setName('');
    setPicture('');
    setPreparationTime();
    setCookTime();
    setDifficulty('');
    setIngredients([]);
    setQuantity([]);
    setCategory('');
    setUnit([]);
    setType('');
    setportions('');
    setDescription('');
  };

  return (
    <div>
      <h1>Formulaire à compléter</h1>
      <label className='label-name'>
        <span>Nom</span>
        <div>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </label>
      <br />
      <label className='label-preparationTime'>
        <span>Temps de préparation (en minutes)</span>
        <div>
          <input type="int" id="preparationTime" value={preparationTime} onChange={(e) => setPreparationTime(parseInt(e.target.value))} />
        </div>
      </label>
      <br />
      <label className='label-cookTime'>
        <span>Temps de cuisson (en minutes)</span>
        <div>
          <input type="int" id="cookTime" value={cookTime} onChange={(e) => setCookTime(parseInt(e.target.value))} />
        </div>
      </label>
      <br />
      <label className='label-portions'>
        <span>Portion(s)</span>
        <div>
          <input type="int" id="portions" value={portions} onChange={(e) => setportions(parseInt(e.target.value))} />
        </div>
      </label>
      <br />
      <label className='label-description'>
        <span>Description</span>
        <div>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
      </label>
      <br />
      <label className='label-picture'>
        <span>URL Photo</span>
        <div>
          <input type="text" id="picture" value={picture} onChange={(e) => setPicture(e.target.value)} />
        </div>
      </label>
      <br />
      <label className='label-difficulty'>
        <select value={difficulty} id="difficulty" onChange={handleChangeDifficulty}>
          <option value="">Sélectionnez un niveau de difficulté</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <br />
      <label className='Season'>
        <select value={saison} id="season" onChange={handleChangeSeason}>
          <option value="">Sélectionnez une saison</option>
          <option value="printemps">Printemps</option>
          <option value="ete">Eté</option>
          <option value="automne">Automne</option>
          <option value="hiver">Hiver</option>
        </select>
      </label>
      <br />
      <br />
      <label className="label-category">
        <select value={category} id="category" onChange={handleChangeCategory}>
          <option value="">Sélectionnez une catégorie</option>
          <option value={MealCategory.entree}>Entrée</option>
          <option value={MealCategory.plat}>Plat</option>
          <option value={MealCategory.dessert}>Dessert</option>
        </select>
      </label>
      <br />
      <br />
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <label className='label-ingredient'>
            Ingrédient n° {index+1}{' '}
            <input
              type="text"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            />
          </label>
          <label>
            Quantité{' '}
            <input
              type="number"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', parseFloat(e.target.value))}
            />
          </label>
          <label className='label-ingredient'>
            Unité{' '}
            <input
              type="text"
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            />
          </label>
          <button className="remove-button" onClick={() => handleRemoveIngredient(index)}>
            Supprimer
          </button>
        </div>
      ))}
      <button className="form-button" onClick={handleAddIngredient}>
        Ajouter un ingrédient
      </button>
      <br />
      <br />

      {instructions.map((instruction, index) => (
        <div key={index}>
          <label className="label-instruction">
            Etape {index+1}{' '}
            <br/>
            <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
            />
          </label>
          <button className="remove-button" onClick={() => handleRemoveInstruction(index)}>Supprimer</button>
        </div>
      ))}
      <button className="form-button" onClick={handleAddInstruction}>Ajouter une instruction</button>
      <br />
      <br />
      <br />
      <button className="form-button" type="submit" onClick={handleSubmit}>Ajouter</button>
      <br />
      <br />
    </div>
  );
}

export default Formulaire;
