import {Recipe} from "./Recipe";
import './RecipeCard.css'
import {useNavigate} from "react-router-dom";

type RecipeProps = {
    recipe: Recipe
}

export default function RecipeCard(props: RecipeProps) {

    const navigate = useNavigate()

    return (
        <div className="recipe-card">
            <p>Name:</p>
            {props.recipe.name}
            <p>Description:</p>
            {props.recipe.description}
            <p>ID:</p>
            {props.recipe.id}
            <button onClick={() => {navigate("/recipes/" + props.recipe.id)}}>Recipe Details</button>
        </div>
    )
}