import sendRequest from './send-request';
const BASE_URL = '/api/notes'

export async function createNote(noteData) {
    console.log('before sendRequest');
    return sendRequest(BASE_URL, 'POST', noteData);
}
