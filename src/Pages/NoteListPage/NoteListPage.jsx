// import { useEffect } from 'react';

import * as notesServices from '../../Utilities/notes-service';

import NotePad from "../../Components/NotePad/Notepad"

import "./NoteListPage.css";

export default function NoteListPage({ notes, setNotes }) {
    async function deleteNote(id) {
        await notesServices.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
    }



    if (notes.length === 0) {
        return <h3>No Quacks in this pond. Go make some Quacks!</h3>
    }

    const notesList = notes.map((n) => (
        <div  key={n._id}>
            <NotePad note={n} deleteNote={deleteNote} />
        </div>
    ) )

    return (
        <main>
            <h1>NoteListPage</h1>
            <div className='note-list' >
                { notesList }
            </div>
        </main>
    )
};