import { GET_GISTS, GISTS_RECIEVED } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    gists: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS:
            return { ...state, loading: true };
        case GISTS_RECIEVED:
            return { ...state, gists: action.data.data, loading: false }
        default:
            return state;
    }
};

export default reducer;