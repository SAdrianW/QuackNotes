// Service modules export business / app logic, such as managing tokens, etc.
// Service modules often depend on API modules for making AJAX requests to the server

import * as usersAPI from "./users-api"

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
};

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token);
    return getUser();
}

export function logOut() {
    localStorage.removeItem('token');
}

export function getToken() {
    const token = localStorage.getItem('token');
    // getItem returns null if there's string
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    // a JWT's expire is in seconds not milliseconds
    if (payload.exp * 1000 < Date.now()) {
        // token has expired
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}


