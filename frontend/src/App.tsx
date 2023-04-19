import React from 'react';
import './App.css';
import Header from "./Header";
import RecipeGallery from "./RecipeGallery";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AddRecipe from "./AddRecipe";
import useRecipes from "./useRecipes";
import RecipeDetail from "./RecipeDetail";
import LoginPage from "./LoginPage";
import useUser from "./useUser";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {

    const {recipes, addRecipe, deleteRecipe} = useRecipes()
    const {user, login} = useUser()

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/login" element={<LoginPage onLogin={login}/>}/>
                    <Route element={<Navigate to="/recipes"/>}/>
                    <Route path="/recipes"
                           element={<RecipeGallery recipes={recipes}/>}/>

                    <Route element={<ProtectedRoutes user={user}/>}>
                        <Route path="/recipes/add"
                               element={<AddRecipe addRecipe={addRecipe}/>}/>
                        <Route path="/recipes/:id"
                               element={<RecipeDetail deleteRecipe={deleteRecipe}/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;