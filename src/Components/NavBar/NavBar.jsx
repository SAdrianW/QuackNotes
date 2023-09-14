import { Link } from "react-router-dom"
import * as userService from "../../Utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser, start1, start2, start3 }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return(
        <nav className="navbar">
            <Link className="stroke-nav" to="/notes" onClick={start1} >Quack Pond</Link>
            <Link className="stroke-nav" to="/notes/new" onClick={start2} >New Quack</Link>           
            <h1 className="heading">Greetings {user.name}, Welcome to Quack Notes!</h1>
            <Link className="stroke-nav" to="/" onClick={start3} >Home page</Link>            
            <Link className="stroke-nav" to="" onClick={ () => {handleLogOut(); start3() }}>Log Out</Link>
        </nav>
    )
};

// todo: refactor into divs for flex spacing