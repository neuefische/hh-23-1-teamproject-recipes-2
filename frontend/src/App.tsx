import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import RecipeGallery from "./RecipeGallery";
import axios from "axios";
import {NewRecipe, Recipe} from "./Recipe";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AddRecipe from "./AddRecipe";

function App() {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [recipeAdded, setAddRecipe] = useState<string>("")

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
            .then((response) => {
                setAddRecipe(response.data)
            })
            .then(() => loadAllRecipes())
            .then(() => setAddRecipe(""))
            .catch(() => console.error("post on /api/recipes not successful"))
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route element={<Navigate to="/recipes"/>}/>
                    <Route path="/recipes"
                           element={<RecipeGallery recipes={recipes}/>}/>
                    <Route path="/recipes/add"
                           element={<AddRecipe addRecipe={addRecipe}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;