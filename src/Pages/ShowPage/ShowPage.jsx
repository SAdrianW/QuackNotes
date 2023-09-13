import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import * as notesServices from "../../Utilities/notes-service";

import NotePad from "../../Components/NotePad/Notepad";

export default function ShowPage({ notes }) {
    let { id } = useParams();
    // const note = notes.find((n) => id === n._id);

    const [singleNote, setSingleNote] = useState({});
    // const navigate = useNavigate();

    // async function showNote(id) {
    //     const note = await notesServices.showNote(id);
    //     setSingleNote(note);
    // };

    useEffect(() => {      
            notesServices.showNote(id).then((note) => { 
                setSingleNote(note)
                // console.log(note)
            } );
            // setSingleNote(note);
            // console.log(singleNote)      
    }, [])



    return (
        <div>
            <NotePad note={singleNote} />
        </div>
    )
}