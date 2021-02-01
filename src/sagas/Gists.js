import { put } from 'redux-saga/effects';
import { GISTS_RECIEVED, USER_GISTS_RECIEVED, SEARCH_USERS_RECIEVED } from '../constants/ActionTypes';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

// Get public gists list
export function* fetchGists() {
  const json = yield octokit.gists.listPublic()
        .then(response => response);    

  yield put({ type: GISTS_RECIEVED, data: json });
}

// Get gits by username
export function* fetchUserGists(actionData) {
    const json = yield octokit.gists.listForUser({ username: actionData.payload })
          .then(response => response);    
  
    yield put({ type: USER_GISTS_RECIEVED, data: json });
}

// Search for git users
// Note: There is a limit of searches which can be done in specified time for an authenticated user
export function* searchUsers(actionData) {
    const json = yield octokit.search.users({ q: actionData.payload }) 
          .then(response => response);    
  
    yield put({ type: SEARCH_USERS_RECIEVED, data: json });
}
