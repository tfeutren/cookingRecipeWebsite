// JSON fil with all the recipes 

import kouign from '../assets/kouign.jpg'
import crepes from '../assets/crepes.jpg'
import clafoutis_cerise from '../assets/clafoutis_cerise.png'

export const recipeList = [
	{
		name: 'Kouing-Amann',
		difficulty: 2,
		preparationTime: 30,
		cookTime: 30,
		picture: kouign,
		category: 'dessert',
		type: "cake",
        description: "Le kouign-amann est un gâteau originaire de Douarnenez, dans le Finistère en Bretagne. Il est composé de pâte à pain et de sucre, de beurre salé et de sucre. Il est cuit au four. Il est de forme circulaire, avec un bord haut et un centre plat. Il est croustillant et fondant.",
        ingredients: [ {name: "farine", quantity : 250, unit : "g"}, {name : "beurre", quantity : 200, unit : "g"}, {name : "sucre", quantity : 200, unit : "g" }, {name : "sel", quantity : 1, unit : "pincée"}, {name : "levure", quantity : 10, unit : "g"}, {name : "eau", quantity : 10, unit : "cl" } ],
        portions: 6,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Mélanger la farine, le sel, la levure et l'eau", "Laisser reposer 1h", "Etaler la pâte", "Ajouter le beurre et le sucre", "Rouler la pâte", "Laisser reposer 1h", "Cuire 30min à 180°C"]
    },
    {
        name: 'Crêpes',
        difficulty: 1,
        preparationTime: 15,
        cookTime: 10,
        picture: crepes,
        category: 'dessert',
        type: "cake",
        description: "La crêpe est une galette de pâte mince, cuite sur les deux faces dans une poêle, ou sur une plaque chauffante, ou sur un bilig. La crêpe peut être garnie de multiples façons, salées ou sucrées. Elle est consommée à la Chandeleur, fête chrétienne qui se déroule le 2 février, ainsi que le jour du Mardi gras.",
        ingredients: [ {name: "farine",quantity : 187.5 ,unit : "g"},{name: "sel",quantity : 1.5 ,unit : "pincées"},{name: "sucre en poudre",quantity : 37.5 ,unit : "g"}],
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Mélanger la farine, le sel, le sucre, les oeufs et le lait", "Laisser reposer 1h", "Cuire 1min de chaque côté"]
    },
    {
        name: 'Clafoutis aux cerises',
        difficulty: 1,
        preparationTime: 10,
        cookTime: 30,
        picture: clafoutis_cerise,
        category: 'dessert',
        type: "cake",
        description: "Le clafoutis est un gâteau originaire du Limousin, traditionnellement composé de cerises entières non dénoyautées et entièrement recouvertes d'un appareil à flan.Le clafoutis est un gâteau originaire du Limousin, traditionnellement composé de cerises entières non dénoyautées et entièrement recouvertes d'un appareil à flan.",
        ingredients: [{name : "beurre", quantity : 7.5 , unit : "g"},{name : "farine", quantity : 100, unit : "g"},{name : "sucre roux", quantity : 100, unit : "g"},{name : "sel", quantity : 1/4, unit : "pincée"}, {name : "extrait de vanille", quantity : 1/4, unit : "cuillere à café"},{name : "cerises", quantity : 87.5, unit : "g"},{name : "oeuf", quantity : 1/4, unit : " oeuf "},{name : "lait", quantity : 25, unit : "cl"}],
        portions: 1,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Mélanger la farine, le sel, le sucre, les oeufs et le lait", "Laisser reposer 1h", "Cuire 1min de chaque côté"]
    }
]