import {Recipe} from "./Recipe";
import React from "react";
import RecipeCard from "./RecipeCard";
import './RecipeGallery.css'


type RecipeGalleryProps = {
    recipes: Recipe[],
    editRecipe: (recipe: Recipe) => void


}
export default function RecipeGallery(props: RecipeGalleryProps) {
    return (
        <div className="recipe-gallery">
            {props.recipes.map((card) => {
                return (<RecipeCard key={card.id}
                                    recipe={card}
                editRecipe={props.editRecipe}
                />)
            })}
        </div>
    )
}