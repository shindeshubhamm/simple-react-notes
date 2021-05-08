import { FETCH_TODOS, TODO_FETCH_SUCCESS, TODO_FETCH_FAIL } from '../types';

import axios from 'axios';

export const fetchTodos = () => (dispatch) => {
    dispatch({ type: FETCH_TODOS });
    try {
        const res = axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(res);
        dispatch({ type: TODO_FETCH_SUCCESS, payload: [] });
    } catch (error) {
        dispatch({ type: TODO_FETCH_FAIL });
    }
};
