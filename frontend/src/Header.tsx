import {Link, NavLink} from "react-router-dom";
export default function Header() {

    return (
        <div>
            <h1>Hier gibt es bald was zu Futtern</h1>
            <Link to="/recipes">Zu den Rezepten</Link><br/>
            <NavLink to="/recipes/add">Rezept erstellen</NavLink><br/>
            <NavLink to="/login">Login</NavLink><br/>
        </div>
    )
}