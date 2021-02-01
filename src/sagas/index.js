import {all, put, takeLatest,} from 'redux-saga/effects';
import {GET_GISTS, GISTS_RECIEVED} from '../constants/ActionTypes';
import {fetchGists} from './Gists';


function* actionWatcher() {
     yield takeLatest(GET_GISTS, fetchGists)
}

export default function* rootSaga(getState) {
    yield all([
        actionWatcher(),
    ]);
}
