import { FETCH_USER_FAIL, FETCH_USER_SUCCESS, LOAD_USER } from '../types';

const initialState = {
    loading: false,
    userData: null,
    noteId: -1,
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                loading: true,
                noteId: payload,
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: payload,
            };

        case FETCH_USER_FAIL:
            return {
                ...state,
                loading: false,
                userData: null,
                noteId: -1,
            };

        default:
            return { ...state };
    }
};

export default userReducer;
