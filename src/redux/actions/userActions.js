import axios from 'axios';

import { FETCH_USER_FAIL, FETCH_USER_SUCCESS, LOAD_USER } from '../types';
import { setAlert } from './appActions';

export const loadUser = (id, noteId) => async (dispatch) => {
    dispatch({ type: LOAD_USER, payload: noteId });
    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
        dispatch(setAlert('New user loaded!', 'success'));
    } catch (error) {
        dispatch({ type: FETCH_USER_FAIL });
        dispatch(setAlert('Failed to fetch user!', 'error'));
    }
};
