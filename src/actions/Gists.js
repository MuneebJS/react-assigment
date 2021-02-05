import { GET_GISTS, GET_USER_GISTS, SEARCH_USERS, HIDE_MESSAGE, SHOW_MESSAGE } from '../constants/ActionTypes';

export function getGists(payload) {
	return { type: GET_GISTS, payload };
}

export function getUserGists(payload) {
	return { type: GET_USER_GISTS, payload };
}

export function searchUsers(payload) {
	return { type: SEARCH_USERS, payload };
}

export const showMessage = (message) => {
	return {
		type: SHOW_MESSAGE,
		payload: message,
	};
};

export const hideMessage = () => {
	return {
		type: HIDE_MESSAGE,
	};
};
