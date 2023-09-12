// import { useEffect } from 'react';

import * as notesServices from '../../Utilities/notes-service';

import NotePadSmall from "../../Components/NotePadSmall/NotepadSmall"

import "./NoteListPage.css";

export default function NoteListPage({ notes, setNotes }) {
    async function deleteNote(id) {
        await notesServices.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
    }

    // TODO: new component, NoteListItem

    if (notes.length === 0) {
        return <h3>No Quacks in this pond. Go make some Quacks!</h3>
    }

    const notesList = notes.map((n) => (
        <div  key={n._id}>
            <NotePadSmall note={n} deleteNote={deleteNote} />
        </div>
    ) )

    return (
        <main>
            <h1 className='heading' >NoteListPage</h1>
            <div className='note-list' >
                { notesList }
            </div>
        </main>
    )
};