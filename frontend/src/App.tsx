import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import RecipeGallery from "./RecipeGallery";
import axios from "axios";
import {Recipe} from "./Recipe";

function App() {
    //const{recipe: Recipe[]} = useRe
    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        loadAllRecipes()
    }, [])

    function loadAllRecipes() {
        axios.get("/api/recipes")
            .then((getAllRecipesResponse) => {setRecipes(getAllRecipesResponse.data)})
            .catch((error) =>{console.error(error)})
    }

    function addRecipe() {
        axios.post("/api/recipes", {id:"", name:""})
            .then((response) =>{
                setAddRecipe(response.data)
            })
            .then(() => loadAllRecipes())
            .then(() => setAddRecipe(""))
            .catch(() => console.error("post on /api/recipes not successful"))
    }

    return (
        <div className="App">
            <Header/>
            <RecipeGallery recipes={recipes}/>
        </div>
    );
}
export default App;
