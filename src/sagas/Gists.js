import { put } from 'redux-saga/effects';
import { GISTS_RECIEVED, USER_GISTS_RECIEVED, SEARCH_USERS_RECIEVED, SHOW_MESSAGE } from '../constants/ActionTypes';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

// Get public gists list
export function* fetchGists(data) {
	const json = yield octokit.gists
		.listPublic(data.payload)
		.then((response) => response)
		.catch((error) => error);

	if (json.message) {
		yield put({ type: SHOW_MESSAGE, data: json.message });
	} else {
		yield put({ type: GISTS_RECIEVED, data: json });
	}
}

// Get gits by username
export function* fetchUserGists(actionData) {
	const json = yield octokit.gists
		// .listForUser({ username: actionData.payload })
		.listForUser(actionData.payload)
		.then((response) => response)
		.catch((error) => error);

	if (json.message) {
		yield put({ type: SHOW_MESSAGE, data: json.message });
	} else {
		yield put({ type: USER_GISTS_RECIEVED, data: json });
	}
}

// Search for git users
// Keep in mind, there is a limit of searches which can be done in specified time for an authenticated user
// Note: Not used anymore
export function* searchUsers(actionData) {
	const json = yield octokit.search
		.users({ q: actionData.payload })
		.then((response) => response)
		.catch((error) => error);

	if (json.message) {
		yield put({ type: SHOW_MESSAGE, data: json.message });
	} else {
		yield put({ type: SEARCH_USERS_RECIEVED, data: json });
	}
}
