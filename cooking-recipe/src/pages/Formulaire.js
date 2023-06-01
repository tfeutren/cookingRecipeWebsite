import React, { useState } from 'react';

function Formulaire() {
  const [titre, setTitre] = useState('');
  const [tempsPreparation, setTempsPreparation] = useState('');
  const [budget, setBudget] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Créer un objet recette avec les valeurs des champs
    const recette = {
      titre,
      tempsPreparation,
      budget,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
    };

    // Envoyer l'objet recette à l'API ou effectuer d'autres opérations nécessaires
/* name: "Big Mac",
        difficulty: 1,
        preparationTime: 1,
        cookTime: 1,
        picture: bigmac,
        category: "plat",
        type: "burger",
        description: "Le Big Mac est un hamburger vendu par l'entreprise américaine de restauration rapide McDonald's. Il a été créé en 1967 par le franchisé Jim Delligatti et est devenu un produit phare de la chaîne de restauration rapide.",
        ingredients: [{name: "pain à burger", quantity: 2, unit: "tranches"}, {name: "steak haché", quantity: 2, unit: "steak"}, {name: "cornichon", quantity: 2, unit: "cornichons"}, {name: "oignon", quantity: 1, unit: "oignon"}, {name: "sauce big mac", quantity: 2, unit: "dose"}],
        portions: 1,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Faire cuire le steak haché", "Faire griller les tranches de pain", "Couper les cornichons et l'oignon en rondelles", "Assembler le burger"]
*/
    // Réinitialiser les valeurs des champs après la soumission
    setTitre('');
    setTempsPreparation('');
    setBudget('');
    setIngredients('');
  };

  return (
    <div>
      <h1>Ajouter une recette</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titre : 
          <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Temps de préparation : 
          <input type="text" value={tempsPreparation} onChange={(e) => setTempsPreparation(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Budget : 
          <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </label>
        <br />
        <br />

        <label>
          Ingrédients (séparés par des virgules) : 
          <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </label>
        <br />
        <br />
        <br />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Formulaire;
