import {Recipe} from "./Recipe";
import React from "react";
import RecipeCard from "./RecipeCard";


type RecipeGalleryProps = {
    recipes: Recipe[],
}

export default function RecipeGallery(props : RecipeGalleryProps){
    return (
        <div className = "recipe-gallery">

            {props.recipes.map((card)=>{
                return (<RecipeCard key ={card.id}
                    recipe={card}/>)

            })}
        </div>
    )

}
