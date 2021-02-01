import { put } from 'redux-saga/effects';
import { GISTS_RECIEVED } from '../constants/ActionTypes';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export function* fetchGists() {
//   const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  const json = yield octokit.gists.listPublic()
        .then(response => response);    

  yield put({ type: GISTS_RECIEVED, data: json });
}
