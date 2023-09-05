import { useState  } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from "../../Utilities/users-service";
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../Components/NavBar/NavBar';
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    
    return (
        <main className="App">
            { user ?
                <>
                    <NavBar user={user} setUser={setUser} />
                    <Routes>
                        {/* Route components go in here */}
                        <Route path="/orders/new" element={<NewOrderPage />} />
                        <Route path="/orders" element={<OrderHistoryPage />} />
                    </Routes>
                </> 
                :
                <AuthPage setUser={setUser} />
            }
            {/* <h2>Home Page</h2> */}
        </main>
    );
}


