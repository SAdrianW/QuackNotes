import * as notesAPI from './notes-api';

export async function createNote(noteData) {
    // alert(`${noteData.title}: ${noteData.text}`);
    console.log(`${noteData.title}: ${noteData.text}`);
    const NewNote = await notesAPI.createNote(noteData);
    return NewNote;
}

export async function getNotes() {
    const notes = await notesAPI.getNotes();
    return notes;
}

export async function deleteNote(id) {
    await notesAPI.deleteNote(id);
    return true;
}
