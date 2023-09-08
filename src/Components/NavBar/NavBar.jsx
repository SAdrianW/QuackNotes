import { Link } from "react-router-dom"
import * as userService from "../../Utilities/users-service";

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return(
        <nav className="flex-ctr-ctr">
            <Link to="/notes">Quack Pond</Link>
            &nbsp; | &nbsp;
            <Link to="/notes/new">New Quack</Link>
            &nbsp; | &nbsp;
            <h1>Greetings {user.name}, Welcome to Quack Notes!</h1>
            &nbsp; | &nbsp;&nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
};

// todo: refactor into divs for flex spacing