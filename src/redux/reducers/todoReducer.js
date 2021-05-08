import { TODO_FETCH_SUCCESS, TODO_FETCH_FAIL } from '../types';

const initialState = {
    todos: [],
    loading: true,
    error: false,
};

const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TODO_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: payload,
            };

        case TODO_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return { ...state };
    }
};

export default todoReducer;
