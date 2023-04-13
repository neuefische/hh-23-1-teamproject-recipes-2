import {useEffect, useState} from "react";
import {NewRecipe, Recipe} from "./Recipe";
import axios from "axios";

export default function useRecipes() {

    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        loadAllRecipes()
    }, [])

    function loadAllRecipes() {
        axios.get("/api/recipes")
            .then((getAllRecipesResponse) => {
                setRecipes(getAllRecipesResponse.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function addRecipe(newRecipe: NewRecipe) {
        axios.post("/api/recipes/add", newRecipe)
            .then(() => loadAllRecipes())
            .catch(() => console.error("post on /api/recipes not successful"))
    }

    return {recipes, addRecipe}
}