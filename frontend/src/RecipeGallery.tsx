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
            <input
                type="text"
                placeholder="Search for a recipe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredRecipes.map((card : Recipe) => (
                <RecipeCard key={card.id} recipe={card} />
            ))}
        </div>
    )
}