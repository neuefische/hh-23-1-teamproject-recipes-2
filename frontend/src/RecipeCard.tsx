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
            {props.recipe.name}
            <br/><br/>
            <p>weitere Infos:</p>
            {props.recipe.description}
            <br/><br/>
            <button onClick={() => {navigate("/recipes/" + props.recipe.id)}}>Rezeptdetails</button>
        </div>
    )
}