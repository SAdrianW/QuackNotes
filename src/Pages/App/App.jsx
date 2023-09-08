import { useState  } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from "../../Utilities/users-service";
import NewNotePage from '../NewNotePage/NewNotePage';
import AuthPage from '../AuthPage/AuthPage';
import NoteHistoryPage from '../NoteHistoryPage/NoteHistoryPage';
import NavBar from '../../Components/NavBar/NavBar';
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [notes, setNotes] = useState([]);
    // TODO: figure out what this state needs to be
    
    return (
        <main className="App">
            { user ?
                <>
                    <NavBar user={user} setUser={setUser} />
                    <h2>Like Quick Notes... but they Quack</h2>
                    <Routes>
                        {/* Route components go in here */}
                        <Route path="/notes/new" element={<NewNotePage notes={notes} setNotes={setNotes} />} />
                        <Route path="/notes" element={<NoteHistoryPage notes={notes} />} />
                    </Routes>
                </> 
                :
                <AuthPage setUser={setUser} />
            }
            {/* <h2>Home Page</h2> */}
        </main>
    );
}


