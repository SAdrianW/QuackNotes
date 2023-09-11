import { useState  } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from "../../Utilities/users-service";

// import * as notesServices from '../../Utilities/notes-service';

import NewNotePage from '../NewNotePage/NewNotePage';
import AuthPage from '../AuthPage/AuthPage';
import NotePage from '../NotePage/NotePage';
import NavBar from '../../Components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [notes, setNotes] = useState([]);
    // TODO: migrate notes state to NotePage

    
    return (
        <main className="App">
            { user ?
                <>
                    <NavBar user={user} setUser={setUser} />
                    <LandingPage />
                    <Routes>
                        {/* Route components go in here */}
                        <Route path="/notes/new" element={<NewNotePage notes={notes} setNotes={setNotes} />} />
                        <Route path="/notes" element={<NotePage notes={notes} setNotes={setNotes} user={user} />} />
                        
                    </Routes>
                </> 
                :
                <AuthPage setUser={setUser} />
            }
            {/* <h2>Home Page</h2> */}
        </main>
    );
}


