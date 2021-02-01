import {GET_GISTS, GET_USER_GISTS, SEARCH_USERS} from '../constants/ActionTypes';

export function getGists() {
    return { type: GET_GISTS };
}

export function getUserGists(payload) {
    return { type: GET_USER_GISTS, payload };
}

export function searchUsers(payload) {
    return { type: SEARCH_USERS, payload };
}
