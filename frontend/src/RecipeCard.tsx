import {Recipe} from "./Recipe";

type RecipeProps = {
    recipe: Recipe
}

export default function RecipeCard(props: RecipeProps) {

    return (
        <div className="recipe-card">
            {props.recipe.name}
        </div>
    )
}