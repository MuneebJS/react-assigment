import { GET_GISTS, GET_USER_GISTS, SEARCH_USERS, HIDE_MESSAGE, SHOW_MESSAGE } from '../constants/ActionTypes';

/**
 * @param 	{Object} payload
 * @example { page: 1, per_page: 12 } 
 */
export function getGists(payload) {
	return { type: GET_GISTS, payload };
}

/**
 * @param 	{Object} payload
 * @example {username: "john"} 	 	
 */
export function getUserGists(payload) {
	return { type: GET_USER_GISTS, payload };
}

/**
 * A plain action to dispatch hide message reducer
 */
export const hideMessage = () => {
	return {
		type: HIDE_MESSAGE,
	};
};
