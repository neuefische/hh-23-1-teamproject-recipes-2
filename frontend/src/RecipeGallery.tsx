import {Recipe} from "./Recipe";
import React, {useState} from "react";
import RecipeCard from "./RecipeCard";
import './RecipeGallery.css'

type RecipeGalleryProps = {
    recipes: Recipe[],
}
export default function RecipeGallery(props: RecipeGalleryProps) {
    const [searchTerm, setSearchTerm] = useState("");

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
            {filteredRecipes.map((recipe : Recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {props.recipes.map((card) => {
                return (<RecipeCard key={card.id}
                                    recipe={card}/>)
            })}
        </div>
    )
}