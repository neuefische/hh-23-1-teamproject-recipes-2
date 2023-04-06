import {NewRecipe} from "./Recipe";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

type AddRecipeProps = {
    addRecipe: (newRecipe: NewRecipe) => void
}

export default function AddRecipe(props: AddRecipeProps) {
    const [name, setName] = useState<string>('')
    const navigate = useNavigate()

    function onSaveRecipe(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newRecipe: NewRecipe = {name: name}

        props.addRecipe(newRecipe)

        navigate('/recipes')
    }

    return (
        <div>
            <form onSubmit={onSaveRecipe}>
                <input type="text"
                       value={name}
                       onChange={(event) => {
                           setName(event.target.value)
                       }}/>
                <button>Save Recipe</button>
            </form>
        </div>
    )
}