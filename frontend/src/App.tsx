import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import RecipeGallery from "./RecipeGallery";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AddRecipe from "./AddRecipe";
import useRecipes from "./useRecipes";
import RecipeDetail from "./RecipeDetail";

function App() {

    const {recipes, addRecipe, deleteRecipe} = useRecipes()



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
                    <Route path="/recipes/:id"
                           element={<RecipeDetail deleteRecipe={deleteRecipe}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;