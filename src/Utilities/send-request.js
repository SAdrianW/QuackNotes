import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to inclued a data payload, det headers, specify the method, etc.
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Need to add Authorisation header
        options.headers ||= {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request sent'); 
}