import { Link } from "react-router-dom"
import * as userService from "../../Utilities/users-service";

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return(
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <span>Greetings {user.name}</span>
            &nbsp; | &nbsp;&nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
};