import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Gists from './Gists';

export default (history) => combineReducers({
  router: connectRouter(history),
  gistsReducer: Gists,
});
