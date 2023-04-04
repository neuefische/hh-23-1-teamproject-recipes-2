import {Recipe} from "./Recipe";
import  './RecipeCard.css'

type RecipeProps = {
    recipe: Recipe
}

export default function RecipeCard(props: RecipeProps) {

    return (
        <div className="recipe-card">
            {props.recipe.name}
            {props.recipe.id}
        </div>
    )
}