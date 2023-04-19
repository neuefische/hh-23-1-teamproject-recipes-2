import {useEffect, useState} from "react";
import {NewRecipe, Recipe} from "./Recipe";
import axios from "axios";
import {toast} from "react-toastify";

export default function useRecipes() {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [searchTerm, setSearchTerm] = useState('');

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
        axios.post("/api/recipes", newRecipe)
            .then(() => loadAllRecipes())
            .catch(() => console.error("post on /api/recipes not successful"))
    }

    function deleteRecipe(id : string) {
        axios.delete('/api/recipes/' + id)
            .then(() => {
                setRecipes(recipes.filter((recipe) => recipe.id !== id))
                toast.success("Recipe deleted successfully");
            })
            .catch(console.error)
    }
    const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return {recipes: filteredRecipes, addRecipe, deleteRecipe, searchTerm, setSearchTerm};
}