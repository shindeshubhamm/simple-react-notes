import { SET_ALERT, REMOVE_ALERT } from '../types';

export const setAlert = (message, type) => (dispatch) => {
    const id = Date.now();
    dispatch({
        type: SET_ALERT,
        payload: {
            message,
            type,
            id,
        },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000);
};
