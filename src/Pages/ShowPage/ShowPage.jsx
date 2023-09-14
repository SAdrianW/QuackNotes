import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


import * as notesServices from "../../Utilities/notes-service";

import NotePad from "../../Components/NotePad/Notepad";

export default function ShowPage({ notes, setNotes, start2, start3 }) {
    const navigate = useNavigate();

    async function deleteNote(id) {
        await notesServices.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
        navigate("/notes")
    }

    let { id } = useParams();

    const [singleNote, setSingleNote] = useState({});

    useEffect(() => {      
            notesServices.showNote(id).then((note) => { 
                setSingleNote(note)
            } );
    }, [])



    return (
        <div>
            <NotePad note={singleNote} start2={start2} start3={start3} deleteNote={deleteNote} />
        </div>
    )
}