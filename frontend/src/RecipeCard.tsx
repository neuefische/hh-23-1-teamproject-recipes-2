import {Recipe} from "./Recipe";
import  './RecipeCard.css'

type RecipeProps = {
    recipe: Recipe
}

export default function RecipeCard(props: RecipeProps) {

    return (
        <div className="recipe-card">
            <p>name:</p>
            {props.recipe.name}
            <p>id:</p>
            {props.recipe.id}
        </div>
    )
}