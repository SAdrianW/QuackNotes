import * as notesAPI from './notes-api';

export async function createNote(noteData) {
    // alert(`${noteData.title}: ${noteData.text}`);
    console.log(`${noteData.title}: ${noteData.text}`);
    const NewNote = await notesAPI.createNote(noteData);
    return NewNote;
}