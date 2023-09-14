import { useState  } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from "../../Utilities/users-service";
import useSound from 'use-sound';

import quack1 from "../../audio/dobrodie_duck04.wav"
import quack2 from "../../audio/duck-quack.wav"
import quack3 from "../../audio/ducks.wav"

import NewNotePage from '../NewNotePage/NewNotePage';
import AuthPage from '../AuthPage/AuthPage';
import NotePage from '../NotePage/NotePage';
import NavBar from '../../Components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import EditForm from '../../Components/EditForm/EditForm';
import ShowPage from '../ShowPage/ShowPage';
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [notes, setNotes] = useState([]);

    const [image, setImage] = useState('');
    // const [url, setUrl] = useState(''); // not being used? in CJ's ver

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "react-uploads")
        data.append("cloud_name", "kazrion")
        return fetch(" https://api.cloudinary.com/v1_1/kazrion/image/upload ",{
            method:"post",
            body: data
        })
        .then(res => res.json())
        // .then(data => {
        //     setUrl(data.url)
        // }) // not being used? in CJ's ver
        // console.log(url)
        .catch(err => console.log(err))
    }
    
    const [start1] = useSound(quack1, { volume: 0.5 });
    const [start2] = useSound(quack2, { volume: 0.5 });
    const [start3] = useSound(quack3, { volume: 0.5 });

    return (
        <main className="App">
            { user ?
                <>
                    <NavBar user={user} setUser={setUser} start1={start1} start2={start2} start3={start3} />
                    
                    <Routes>
                        {/* Route components go in here */}
                        <Route path="/notes/new" element={<NewNotePage notes={notes} setNotes={setNotes} start2={start2} 
                            uploadImage={uploadImage} image={image} setImage={setImage} 
                            />} />
                        <Route path="/notes" element={<NotePage notes={notes} setNotes={setNotes} user={user} start1={start1} />} />
                        <Route path='/' element={ <LandingPage start1={start1} /> } />
                        <Route path='/notes/:id' element={ <ShowPage notes={notes} start2={start2} start3={start3} /> } />
                        <Route path='/notes/:id/edit' element={ <EditForm notes={notes} start3={start3}
                            uploadImage={uploadImage} image={image} setImage={setImage} 
                            /> } />
                        
                    </Routes>
                </> 
                :
                <AuthPage setUser={setUser} />
            }
            {/* <h2>Home Page</h2> */}
        </main>
    );
}


