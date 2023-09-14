import { useEffect } from "react";

import * as notesServices from "../../Utilities/notes-service";

// import NewNotePage from "../NewNotePage/NewNotePage";
import NoteListPage from "../NoteListPage/NoteListPage";

export default function NotePage({ notes, setNotes, start1 }) {
    
    useEffect(() => {
        // notesServices.getNotes().then((notes) => {
        //     setNotes(notes);
        // });
        async function allNotes() {
            const notes = await notesServices.getNotes()
                setNotes(notes);
        }

        allNotes();

    }, []);

    return (
        <>
            <NoteListPage notes={notes} setNotes={setNotes} start1={start1} />
        </>
    )
}