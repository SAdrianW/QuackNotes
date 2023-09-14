import { useEffect } from "react";

import * as notesServices from "../../Utilities/notes-service";

import NoteListPage from "../NoteListPage/NoteListPage";

export default function NotePage({ notes, setNotes, start1 }) {
    
    useEffect(() => {
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