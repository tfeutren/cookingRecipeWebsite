import React, { useState } from 'react';
import { MealCategory } from '../utility';
import '../styles/Formulaire.css';

function Formulaire() {
  const [name, setName] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [unit, setUnit] = useState([]);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [portion, setPortion] = useState('');
  const [saison, setSaison] = useState('');
  const [instruction, setInstruction] = useState([]);
  const [description, setDescription] = useState('');

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
    setQuantity([...quantity, '']);
    setUnit([...unit, '']);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    const updatedQuantity = [...quantity];
    const updatedUnit = [...unit];

    updatedIngredients.splice(index, 1);
    updatedQuantity.splice(index, 1);
    updatedUnit.splice(index, 1);

    setIngredients(updatedIngredients);
    setQuantity(updatedQuantity);
    setUnit(updatedUnit);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleQuantityChange = (index, value) => {
    const updatedQuantity = [...quantity];
    updatedQuantity[index] = value;
    setQuantity(updatedQuantity);
  };

  const handleUnitChange = (index, value) => {
    const updatedUnit = [...unit];
    updatedUnit[index] = value;
    setUnit(updatedUnit);
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
    setDifficulty(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    alert(
      `Submitted ${name} ${preparationTime} ${preparationTime} ${cookTime} ${portion} ${difficulty} ${category} ${saison}`
    );

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
    setIngredients([]);
    setQuantity([]);
    setCategory('');
    setUnit([]);
    setType('');
    setPortion('');
  };

  return (
    <div>
      <h1>Ajouter une recette</h1>
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
          <input type="text" id="preparationTime" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} />
        </div>
      </label>
      <br />
      <label className='label-cookTime'>
        <span>Temps de cuisson (en minutes)</span>
        <div>
          <input type="text" id="cookTime" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
        </div>
      </label>
      <br />
      <label className='label-portion'>
        <span>Portion(s)</span>
        <div>
          <input type="int" id="portion" value={portion} onChange={(e) => setPortion(e.target.value)} />
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
          <button className="form-button" onClick={() => handleRemoveIngredient(index)}>Supprimer</button>

        </div>
      ))}
      <button className="form-button" onClick={handleAddIngredient}>Ajouter un ingrédient</button>


      <br />
      <br />

      {instruction.map((instruction, index) => (
        <div key={index}>
          <label className="label-instruction">
            Instructions{' '}
            <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
            />
          </label>
          <button className="form-button" onClick={() => handleRemoveInstruction(index)}>Supprimer</button>
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
