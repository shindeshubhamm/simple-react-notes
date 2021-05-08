import { SET_ALERT, REMOVE_ALERT } from '../types';

const initialState = {
    alerts: [],
};

const appReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                alerts:
                    state.alerts.length < 3
                        ? [...state.alerts, payload]
                        : [payload],
            };

        case REMOVE_ALERT:
            return {
                ...state,
                alerts: state.alerts.filter((alert) => alert.id !== payload),
            };
        default:
            return { ...state };
    }
};

export default appReducer;
