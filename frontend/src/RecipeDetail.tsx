import {useEffect, useState} from "react";
import {Recipe} from "./Recipe";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

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

    return (
    <div>
        {
            recipe
            ?<div>
                <p>{recipe.id}</p>
                <p>{recipe.name}</p>
                <p>{recipe.description}</p>
                </div>
                : <div>Loading...</div>
        }
    </div>
    )
}