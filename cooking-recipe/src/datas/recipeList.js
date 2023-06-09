import kouign from '../assets/kouign.jpg'
import crepes from '../assets/crepes.jpg'
import clafoutis_cerise from '../assets/clafoutis_cerise.png'
import bigmac from '../assets/bigmac.jpg'
import cake_sale from '../assets/cake_sale.jpg'
import omelette from '../assets/omelette.jpg'
import { MealCategory } from '../utility'

// JSON filled with all the recipes 
export const recipeList = [
	{
		name: 'Kouign-Amann',
		difficulty: 2,
		preparationTime: 30,
		cookTime: 30,
		picture: kouign,
		category: MealCategory.dessert,
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
        category: MealCategory.dessert,
        description: "La crêpe est une galette de pâte mince, cuite sur les deux faces dans une poêle, ou sur une plaque chauffante, ou sur un bilig. La crêpe peut être garnie de multiples façons, salées ou sucrées. Elle est consommée à la Chandeleur, fête chrétienne qui se déroule le 2 février, ainsi que le jour du Mardi gras.",
        ingredients: [ {name: "farine",quantity : 187.5 ,unit : "g"},{name: "sel",quantity : 1.5 ,unit : "pincées"},{name: "sucre en poudre",quantity : 37.5 ,unit : "g"}],
        portions: 4,
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
        category: MealCategory.dessert,
        description: "Le clafoutis est un gâteau originaire du Limousin, traditionnellement composé de cerises entières non dénoyautées et entièrement recouvertes d'un appareil à flan.",
        ingredients: [{name : "beurre", quantity : 7.5 , unit : "g"},{name : "farine", quantity : 100, unit : "g"},{name : "sucre roux", quantity : 100, unit : "g"},{name : "sel", quantity : 1/4, unit : "pincée"}, {name : "extrait de vanille", quantity : 1/4, unit : "cuillere à café"},{name : "cerises", quantity : 87.5, unit : "g"},{name : "oeuf", quantity : 1/4, unit : " oeuf "},{name : "lait", quantity : 25, unit : "cl"}],
        portions: 1,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Mélanger la farine, le sel, le sucre, les oeufs et le lait", "Laisser reposer 1h", "Cuire 1min de chaque côté"]
    },
    {
        name: "Big Mac",
        difficulty: 1,
        preparationTime: 1,
        cookTime: 1,
        picture: bigmac,
        category: MealCategory.plat,
        description: "Le Big Mac est un hamburger vendu par l'entreprise américaine de restauration rapide McDonald's. Il a été créé en 1967 par le franchisé Jim Delligatti et est devenu un produit phare de la chaîne de restauration rapide.",
        ingredients: [{name: "pain à burger", quantity: 2, unit: "tranches"}, {name: "steak haché", quantity: 2, unit: "steak"}, {name: "cornichon", quantity: 2, unit: "cornichons"}, {name: "oignon", quantity: 1, unit: "oignon"}, {name: "sauce big mac", quantity: 2, unit: "dose"}],
        portions: 1,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Faire cuire le steak haché", "Faire griller les tranches de pain", "Couper les cornichons et l'oignon en rondelles", "Assembler le burger"]
    },
    {
        name: "Cake salé",
        difficulty: 3,
        preparationTime: 20,
        cookTime: 45,
        picture: cake_sale,
        category: MealCategory.entree,
        description: "Le cake salé est un gâteau salé, généralement de forme rectangulaire, composé d'ingrédients salés et sucrés. Il est souvent servi en apéritif ou en entrée.",
        ingredients: [{name: "farine", quantity: 200, unit: "g"}, {name: "oeuf", quantity: 3, unit: "oeufs"}, {name: "lait", quantity: 10, unit: "cl"}, {name: "huile", quantity: 10, unit: "cl"}, {name: "levure", quantity: 1, unit: "sachet"}, {name: "sel", quantity: 1, unit: "pincée"}, {name: "poivre", quantity: 1, unit: "pincée"}, {name: "gruyère", quantity: 100, unit: "g"}, {name: "jambon", quantity: 100, unit: "g"}, {name: "olive", quantity: 100, unit: "g"}],
        portions: 6,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Mélanger la farine, le sel, la levure et l'eau", "Laisser reposer 1h", "Etaler la pâte", "Ajouter le beurre et le sucre", "Rouler la pâte", "Laisser reposer 1h", "Cuire 30min à 180°C"]
    },
    {
        name: "Omelette jambon fromage",
        difficulty: 1,
        preparationTime: 5,
        cookTime: 5,
        picture: omelette,
        category: MealCategory.plat,
        description: "L'omelette est un mets préparé à base d'œufs battus cuits avec de la matière grasse dans une poêle, une poêle à crêpes ou une poêle à omelette, ou encore une poêle à blinis. L'omelette est généralement servie en plat principal ou en entrée.",
        ingredients: [{name: "oeuf", quantity: 2, unit: "oeufs"}, {name: "jambon", quantity: 1, unit: "tranche"}, {name: "fromage", quantity: 1, unit: "tranche"}, {name: "sel", quantity: 1, unit: "pincée"}, {name: "poivre", quantity: 1, unit: "pincée"}],
        portions: 1,
        season: ["summer", "winter", "spring", "autumn"],
        uploadDate : "2023-26-05",
        instructions : ["Battre les oeufs", "Ajouter le sel et le poivre", "Faire cuire l'omelette", "Ajouter le jambon et le fromage"]
    }
]