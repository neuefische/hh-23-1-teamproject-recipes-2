import {Recipe} from "./Recipe";
import React, {useState} from "react";
import RecipeCard from "./RecipeCard";
import './RecipeGallery.css'
import useRecipes from "./useRecipes";

type RecipeGalleryProps = {
    recipes: Recipe[],
}
export default function RecipeGallery(props: RecipeGalleryProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const {recipes} = useRecipes()

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="recipe-gallery">
            <br/>
            <br/>
            <div className="actionbar">
            <input
                type="text"
                placeholder="Rezeptname..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            {filteredRecipes.map((card : Recipe) => (
                <RecipeCard key={card.id} recipe={card} />
            ))}
        </div>
    )
}