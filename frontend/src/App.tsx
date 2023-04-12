import React from 'react';
import './App.css';
import Header from "./Header";
import RecipeGallery from "./RecipeGallery";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AddRecipe from "./AddRecipe";
import useRecipes from "./useRecipes";
import useUser from "./useUser";
import LoginPage from "./LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {

    const {user, login} = useUser()
    const {recipes, addRecipe} = useRecipes()

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/login" element={<LoginPage onLogin={login}/>}/>

                    <Route element={<ProtectedRoutes user={user}/>}>
                        <Route path="/recipes/add"
                               element={<AddRecipe addRecipe={addRecipe}/>}/>
                    </Route>

                    <Route element={<Navigate to="/recipes"/>}/>
                    <Route path="/recipes"
                           element={<RecipeGallery recipes={recipes}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;