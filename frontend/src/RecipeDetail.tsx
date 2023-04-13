import {useEffect, useState} from "react";
import {Recipe} from "./Recipe";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import useRecipes from "./useRecipes";

/*
type Props = {
    recipe: Recipe,
    editRecipe: (recipe: Recipe) => void,
    deleteRecipe: (id: string) => void
}
*/

export default function RecipeDetail() {
    const [recipe, setRecipe] = useState<Recipe>()
    const {id} = useParams<{id: string}>()


    useEffect(() => {
        if (id) {
            loadRecipeById(id)
        }
       //eslint-disable-next-line
    }, [])

    function loadRecipeById(id: string) {
        axios.get("/api/recipes/" + id)
            .then((response) => {
                setRecipe(response.data)
            })
            .catch((error) => {
                toast.error("Recipe does not exist")
            })
    }

    // function onEditClick() {
    //     const recipeToEdit: Recipe = {...props.recipe, name: props.recipe.name, description: props.recipe.description}
    //
    //     props.editRecipe(recipeToEdit)
    // }

    return (
    <div>
        {
            recipe
            ?<div>
                <p>{recipe.id}</p>
                <p>{recipe.name}</p>
                <p>{recipe.description}</p>
                    {/*<button onClick={onEditClick}>Bearbeiten</button>*/}
                </div>
                : <div>Loading...</div>
        }
    </div>
    )
}