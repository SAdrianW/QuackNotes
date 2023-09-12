import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


import * as notesServices from "../../Utilities/notes-service";

import NotePad from "../../Components/NotePad/Notepad";

export default function({ notes }) {
    let { id } = useParams();
    const note = notes.find((n) => id === n._id);

    // const [singleNote, setSingleNote] = useState(null);
    // const navigate = useNavigate();

    // async function showNote(id) {
    //     const note = await notesServices.showNote(id);
    //     setSingleNote(note);
    // };


    // useEffect(() => {
    //     async function showNote() {
    //         const note = await notesServices.showNote
    //     }
    // }, [])

    return (
        <div>
            <NotePad note={note} />
        </div>
    )
}