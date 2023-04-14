import useDetail from "./useDetail";

function RecipeDetail() {

    const {editedRecipe, recipe, editing, handleFormSubmit, editOnClick, recipeInputChange} = useDetail()

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
                    </div>
                )
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default RecipeDetail