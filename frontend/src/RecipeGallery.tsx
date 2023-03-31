import {Recipe} from "./Recipe";
import React from "react";
import RecipeCard from "./RecipeCard";


type RecipeGalleryProps = {
    recipes: Recipe[],
}

export default function RecipeGallery(props : RecipeGalleryProps){
    return (
        <div className = "recipe-gallery">

            {props.recipes.map((recipe)=>{
                return (<RecipeCard key ={recipe.id}
                    recipe={recipe}/>)
            })}
        </div>
    )
}