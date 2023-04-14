import React, { useEffect, useState } from "react";
import { Recipe } from "./Recipe";
import {useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function RecipeDetail() {
    const [recipe, setRecipe] = useState<Recipe>();
    const [editing, setEditing] = useState(false); // State to manage edit mode
    const [editedRecipe, setEditedRecipe] = useState<Recipe>({
        id: "",
        name: "",
        description: "",
    });

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            loadRecipeById(id);
        }
        //eslint-disable-next-line
    }, []);

    function loadRecipeById(id: string) {
        axios
            .get("/api/recipes/" + id)
            .then((response) => {
                setRecipe(response.data);
                setEditedRecipe(response.data); // Set initial values for edited recipe
            })
            .catch((error) => {
                toast.error("Recipe does not exist");
            });
    }

    function editOnClick() {
        setEditing(true); // Enable edit mode
    }

    function recipeInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setEditedRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios
            .put("/api/recipes/" + id, editedRecipe)
            .then((response) => {
                setRecipe(response.data);
                setEditing(false);
                toast.success("Recipe updated successfully");
            })
            .catch((error) => {
                toast.error("Failed to update recipe");
            });
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
                    </div>
                )
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}