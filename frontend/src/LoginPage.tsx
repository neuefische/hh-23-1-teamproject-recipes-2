import {FormEvent, useState} from "react";
import {publicDecrypt} from "crypto";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";

type Props = {
    onLogin: (username: string, password: string) => Promise<void>
}
export default function LoginPage(props: Props) {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.onLogin(username, password)
            .then(() => {
                navigate("/recipes")
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={username} placeholder="username" type="text"
                   onChange={changeEvent => setUsername(changeEvent.target.value)}/>
            <input value={password} placeholder="password" type="password" onChange={e => setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
    )
}