import {Recipe} from "./Recipe";
import './RecipeCard.css'

type RecipeProps = {
    recipe: Recipe
}

export default function RecipeCard(props: RecipeProps) {

    return (
        <div className="recipe-card">
            <p>
                Name:
                {props.recipe.name}
                Description:
                {props.recipe.description}
                ID:
                {props.recipe.id}
            </p>
        </div>
    )
}