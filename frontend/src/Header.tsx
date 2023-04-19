import {Link, NavLink} from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <h1>Just eat it.</h1>
            <p>"no one wants to be defeated- showin' how funky and strong is your fight -
                it doesn't matter who's wrong or right, just eat it, eat it"</p>
            <div className="navbar">
            <Link to="/recipes">Zu den Rezepten</Link><br/>
            <NavLink to="/recipes/add">Rezept erstellen</NavLink><br/>
            </div>
        </div>
    )
}