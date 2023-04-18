import React, {useEffect, useState} from "react";
import {Recipe} from "./Recipe";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import useRecipes from "./useRecipes";

export default function useDetail() {
    const [recipe, setRecipe] = useState<Recipe>();
   // const [recipes, setRecipes] = useState<Recipe[]>([])
    const [editing, setEditing] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState<Recipe>({
        id: "",
        name: "",
        description: "",
    });

    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate()

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
                setEditedRecipe(response.data);
            })
            .catch((error) => {
                toast.error("Recipe does not exist");
            });
    }


    function editOnClick() {
        setEditing(true);
    }

    function recipeInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
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

    return {editedRecipe, recipe, editing, handleFormSubmit, editOnClick, recipeInputChange}
}