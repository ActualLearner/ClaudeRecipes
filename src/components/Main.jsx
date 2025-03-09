import React, { useCallback } from "react"
import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import generateRecipe from "../ai"
import Loading from "./Loading"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState()
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipe !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    const getRecipe = useCallback(() => {
        setIsLoading(true)
        generateRecipe(ingredients)
            .then(res => {
                setIsLoading(false)
                return setRecipe(res)
            })
            .catch(err => console.log(err))
    }, [ingredients])

    const addIngredient = useCallback((formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }, [])

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
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <Recipe recipe={recipe} />}
            {isLoading && <Loading />}
        </main>
    )
}