
import * as notesServices from '../../Utilities/notes-service';

import NotePadSmall from "../../Components/NotePadSmall/NotepadSmall"

import "./NoteListPage.css";

export default function NoteListPage({ notes, setNotes, start1 }) {
    async function deleteNote(id) {
        await notesServices.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
    }


    if (notes.length === 0) {
        return <h3 className='heading stroke-orange'>No Quacks in this pond. Go make some Quacks!</h3>
    }

    const notesList = notes.map((n) => (
        <div  key={n._id}>
            <NotePadSmall note={n} deleteNote={deleteNote} start1={start1} />
        </div>
    ) )

    return (
        <main className='note-list-page'>
            <h1 className='heading' >All Quack Notes in a Pond</h1>
            <div className='note-list' >
                { notesList }
            </div>
        </main>
    )
};