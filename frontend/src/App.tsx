import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import RecipeGallery from "./RecipeGallery";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AddRecipe from "./AddRecipe";
import useRecipes from "./useRecipes";

function App() {

const {recipes, addRecipe} = useRecipes()

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