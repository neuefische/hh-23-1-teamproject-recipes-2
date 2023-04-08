import {NewRecipe} from "./Recipe";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

type AddRecipeProps = {
    addRecipe: (newRecipe: NewRecipe) => void
}

export default function AddRecipe(props: AddRecipeProps) {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>("")
    const navigate = useNavigate()

    function onSaveRecipe(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newRecipe: NewRecipe = {name: name, description: description}

        props.addRecipe(newRecipe)

        navigate('/recipes')
    }

    return (
        <div>
            <form onSubmit={onSaveRecipe}>
                <p>Enter Name</p>
                <input type="text"
                       value={name}
                       onChange={(event) => {
                           setName(event.target.value)
                       }}/> <br/>
                <p>Enter Description</p>
                <input type="text"
                       value={description}
                       onChange={(event) => {
                           setDescription(event.target.value)
                       }}/><br/>
                <button>Save Recipe</button>
            </form>
        </div>
    )
}