// JSON fil with all the recipes 

import kouign from '../assets/kouign.jpg'
import crepes from '../assets/crepes.jpg'

export const recipeList = [
	{
		name: 'kouing amann',
		difficulty: 2,
		preparationTime: 30,
		cookTime: 30,
		picture: kouign,
		category: 'dessert',
		type: "cake",
        description: "Le kouign-amann est un gâteau originaire de Douarnenez, dans le Finistère en Bretagne. Il est composé de pâte à pain et de sucre, de beurre salé et de sucre. Il est cuit au four. Il est de forme circulaire, avec un bord haut et un centre plat. Il est croustillant et fondant.",
        ingredients: [ "farine", "beurre", "sucre", "sel", "levure", "eau" ],
        portions: 4,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Mélanger la farine, le sel, la levure et l'eau", "Laisser reposer 1h", "Etaler la pâte", "Ajouter le beurre et le sucre", "Rouler la pâte", "Laisser reposer 1h", "Cuire 30min à 180°C"]
    },
    {
        name: 'crepes',
        difficulty: 1,
        preparationTime: 15,
        cookTime: 10,
        picture: crepes,
        category: 'dessert',
        type: "cake",
        description: "La crêpe est une galette de pâte mince, cuite sur les deux faces dans une poêle, ou sur une plaque chauffante, ou sur un bilig. La crêpe peut être garnie de multiples façons, salées ou sucrées. Elle est consommée à la Chandeleur, fête chrétienne qui se déroule le 2 février, ainsi que le jour du Mardi gras.",
        ingredients: [ "farine", "oeuf", "lait", "sucre", "sel", "beurre" ],
        portions: 3,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Mélanger la farine, le sel, le sucre, les oeufs et le lait", "Laisser reposer 1h", "Cuire 1min de chaque côté"]
    }
]