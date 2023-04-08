import {Recipe} from "./Recipe";
import './RecipeCard.css'

type RecipeProps = {
    recipe: Recipe
}

export default function RecipeCard(props: RecipeProps) {

    return (
        <div className="recipe-card">
            <p>Name:</p>
            {props.recipe.name}
            <p>Description:</p>
            {props.recipe.description}
            <p>ID:</p>
            {props.recipe.id}
        </div>
    )
}