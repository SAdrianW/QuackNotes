import * as notesAPI from './notes-api';

export async function createNote(noteData) {
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

export async function editNote(id) {
    // console.log(id);
    await notesAPI.editNote(id);
    return id;
}

export async function showNote(id) {
    // console.log(id)
    const note = await notesAPI.showNote(id);
    // console.log(note)
    return note;
}
