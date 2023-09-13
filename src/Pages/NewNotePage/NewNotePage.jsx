
import * as notesServices from '../../Utilities/notes-service';

import NoteForm from '../../Components/NoteForm/NoteForm';

export default function NewNotePage({ notes, setNotes, uploadImage, image, setImage }) {
    
    async function addNote(note) {
        const newNote = await notesServices.createNote(note);
        setNotes([...notes, newNote]);
    }

    return (
        <main>
            <h1>NewNotePage</h1>
            <NoteForm addNote={addNote} uploadImage={uploadImage} image={image} setImage={setImage} />
        </main>
    )
};