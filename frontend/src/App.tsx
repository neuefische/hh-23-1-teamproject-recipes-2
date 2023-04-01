import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import RecipeGallery from "./RecipeGallery";
import axios from "axios";
import {Recipe} from "./Recipe";
import ActionBar from "./ActionBar";

function App() {
    //const{recipe: Recipe[]} = useRe
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [recipeAdded, setAddRecipe] = useState<string>("")

    function onChange(value: string) {
        setAddRecipe(value)
    }

    useEffect(() => {
        loadAllRecipes()
    }, [])

    function loadAllRecipes() {
        axios.get("/api/recipes")
            .then((getAllRecipesResponse) => {setRecipes(getAllRecipesResponse.data)})
            .catch((error) =>{console.error(error)})
    }

    function addRecipe() {
        axios.post("/api/recipes", {id:"", name:"recipeAdded"})
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
            <ActionBar inputText={recipeAdded} onChange={onChange} addRecipe={addRecipe}/>
            <RecipeGallery recipes={recipes}/>
        </div>
    );
}
export default App;
