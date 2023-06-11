import React, { useState } from 'react';
import { MealCategory } from '../utility';

function Formulaire() {
  const [name, setName] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredientName] = useState([]);
  const [quantity, setIngredientQuantity] = useState([]);
  const [unit, setIngredientUnit] = useState([]);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [portion, setPortion] = useState('');
  const [saison, setSaison] = useState('');
  const [instruction, setInstruction] = useState([]);
  const [description, setDescription] = useState('');

  const handleAddIngredient = () => {
    setIngredientName([...ingredients, '']);
    setIngredientQuantity([...quantity, '']);
    setIngredientUnit([...unit, '']);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    const updatedQuantity = [...quantity];
    const updatedUnit = [...unit];
  
    updatedIngredients.splice(index, 1);
    updatedQuantity.splice(index, 1);
    updatedUnit.splice(index, 1);
  
    setIngredientName(updatedIngredients);
    setIngredientQuantity(updatedQuantity);
    setIngredientUnit(updatedUnit);
  };
  
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredientName(updatedIngredients);
  };
  
  const handleQuantityChange = (index, value) => {
    const updatedQuantity = [...quantity];
    updatedQuantity[index] = value;
    setIngredientQuantity(updatedQuantity);
  };
  
  const handleUnitChange = (index, value) => {
    const updatedUnit = [...unit];
    updatedUnit[index] = value;
    setIngredientUnit(updatedUnit);
  };
  
  const handleAddInstruction = () => {
    setInstruction([...instruction, '']);
  };
  
  const handleRemoveInstruction = (index) => {
    const updatedInstruction = [...instruction];
    updatedInstruction.splice(index, 1);
    setInstruction(updatedInstruction);
  };

  const handleInstructionChange = (index, value) => {
    const updatedInstruction = [...instruction];
    updatedInstruction[index] = value;
    setInstruction(updatedInstruction);
  };
  
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeSeason = (e) => {
    setSaison(e.target.value);
  };

  const handleChangeDifficulty = (e) => {
    handleChangeDifficulty(e.target.value);
  }
  
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
 
  const handleSubmit = () => {
    alert(`Submitted ${name} ${preparationTime} ${preparationTime} ${cookTime} ${portion} ${difficulty} ${category} ${saison}`);

    
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
    };

    // Envoyer l'objet recette à l'API ou effectuer d'autres opérations nécessaires
    // Réinitialiser les valeurs des champs après la soumission
    setName('');
    setPreparationTime('');
    setCookTime('');
    setDifficulty('');
    setIngredientName('');
    setIngredientQuantity('');
    setCategory('');
    setIngredientUnit('');
    setType('');
    setPortion('');
  };

  return (
    <div>
      <h1>Ajouter une recette</h1>
        <label>
          Nom 
          <div>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        </label>
        <br />
        <label>
          Temps de préparation (en minutes)
          <div>
          <input type="text" id="preparationTime" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} />
          </div>
         <br /> 
          Temps de cuisson (en minutes)  
          <div>
          <input type="text" id="cookTime" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
          </div>
          <br />
          Portion(s)
          <div>
          <input type="int" id="portion" value={portion} onChange={(e) => setPortion(e.target.value)} />
          </div>
          <br />
          Description 
          <div>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
         <br /> 
        </label>
        <br />
        <label>
        Difficulté{' '}
          <select value={difficulty} id="difficulty" onChange={handleChangeDifficulty}>
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
        <label>
          Catégorie{' '}
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
          <label>
            Ingrédient{' '}
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
            />
          </label>
          <label>
            Quantité{' '}
            <input
              type="float"
              value={quantity[index]}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            />
          </label>
          <label>
            Unité{' '}
            <input
              type="text"
              value={unit[index]}
              onChange={(e) => handleUnitChange(index, e.target.value)}
            />
          </label>
          <button onClick={() => handleRemoveIngredient(index)}>Supprimer</button>
        </div>
        ))}
        <button onClick={handleAddIngredient}>Ajouter un ingrédient</button>


        <br/>
        <br/>

        {instruction.map((instruction, index) => (
          <div key={index}>
          <label>
            Instructions{' '}
            <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
            />
          </label>
          <button onClick={() => handleRemoveInstruction(index)}>Supprimer</button>
        </div>
        ))}
        <button onClick={handleAddInstruction}>Ajouter une instruction</button>
        <br />
        <br />
        <br />
        <label>
        <button type="submit">Ajouter</button>
      
        </label>
    </div>
  );
}
//Recuperer les donnees et modifier le json
//embellir

export default Formulaire;
