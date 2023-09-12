import { Link } from "react-router-dom"
import * as userService from "../../Utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return(
        <nav className="navbar">
            <Link className="stroke-nav" to="/notes">Quack Pond</Link>
            <Link className="stroke-nav" to="/notes/new">New Quack</Link>           
            <h1 className="heading">Greetings {user.name}, Welcome to Quack Notes!</h1>
            <Link className="stroke-nav" to="/" >Home page</Link>            
            <Link className="stroke-nav" to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
};

// todo: refactor into divs for flex spacing