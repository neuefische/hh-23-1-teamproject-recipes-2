import useDetail from "./useDetail";
import {useNavigate} from "react-router-dom";

type RecipeDetailProps = {
    deleteRecipe: (id: string) => void
}

function RecipeDetail(props: RecipeDetailProps) {

    const {editedRecipe, recipe, editing, handleFormSubmit, editOnClick, recipeInputChange} = useDetail()
    const navigate = useNavigate()

    function onDeleteClick() {
        if (recipe) {
            props.deleteRecipe(recipe.id)
        }

        navigate("/recipes")
    }

    return (
        <div>
            {recipe ? (
                editing ? (
                    <form onSubmit={handleFormSubmit}>
                        <header>Rezept bearbeiten</header>
                        <input
                            type="text"
                            name="name"
                            value={editedRecipe.name}
                            onChange={recipeInputChange}
                        />
                        <input
                            type="text"
                            name="description"
                            value={editedRecipe.description}
                            onChange={recipeInputChange}
                        />
                        <button type="submit">Speichern</button>
                    </form>
                ) : (
                    <div>
                        <header>Rezept details</header>
                        <p>{recipe.id}</p>
                        <p>{recipe.name}</p>
                        <p>{recipe.description}</p>
                        <button onClick={editOnClick}>Rezept Bearbeiten</button>
                        <button onClick={onDeleteClick}>Rezept löschen</button>
                    </div>
                )
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default RecipeDetail