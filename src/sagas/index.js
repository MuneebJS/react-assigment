import {all, takeLatest,} from 'redux-saga/effects';
import {GET_GISTS, GET_USER_GISTS, SEARCH_USERS} from '../constants/ActionTypes';
import {fetchGists, fetchUserGists, searchUsers} from './Gists';


function* actionWatcher() {
     yield takeLatest(GET_GISTS, fetchGists);
     yield takeLatest(GET_USER_GISTS, fetchUserGists);
     yield takeLatest(SEARCH_USERS, searchUsers);
}

export default function* rootSaga(getState) {
    yield all([
        actionWatcher(),
    ]);
}
