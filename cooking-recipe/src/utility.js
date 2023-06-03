export const MealCategory = Object.freeze({
    entree: "entree",
    plat: "plat",
    dessert: "dessert"
})

export function renderDifficulty(difficulty) {
    const fireSymbol = '🔥';
    return fireSymbol.repeat(difficulty);
}