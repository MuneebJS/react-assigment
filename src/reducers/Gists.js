import { GET_GISTS, GISTS_RECIEVED, GET_USER_GISTS, USER_GISTS_RECIEVED, SEARCH_USERS, SEARCH_USERS_RECIEVED } from '../constants/ActionTypes';

const initialState = {
    isEetGistsInProgress: false,
    isSearchUsersInProgress: false,
    searchedUsers: [],
    gists: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS:
            return { ...state, isEetGistsInProgress: true };
        case GISTS_RECIEVED:
            return { ...state, gists: action.data.data, isEetGistsInProgress: false }
        case GET_USER_GISTS:
            return { ...state, isEetGistsInProgress: true };
        case USER_GISTS_RECIEVED:
            return { ...state, gists: action.data.data, isEetGistsInProgress: false }
        case SEARCH_USERS:
            return { ...state, isEetGistsInProgress: true };
        case SEARCH_USERS_RECIEVED:
            return { ...state, searchedUsers: action.data.data.items, isEetGistsInProgress: false }
        default:
            return state;
    }
};

export default reducer;