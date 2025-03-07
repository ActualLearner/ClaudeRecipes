import React from "react"
import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import generateRecipe from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipe, setRecipe] = React.useState("")

    function getRecipe() {
        generateRecipe(ingredients)
            .then(res => setRecipe(res))
            .catch(err => console.log(err))
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}