import { TODO_FETCH_SUCCESS, TODO_FETCH_FAIL } from '../types';

import { setAlert } from '../actions/appActions';

import axios from 'axios';

export const fetchTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        dispatch({ type: TODO_FETCH_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch(setAlert('Todos fetch error!', 'danger'));
        dispatch({ type: TODO_FETCH_FAIL });
    }
};
