import { types } from "../types/types";

const inititalState = {
    notes: [],
    active: null,
};
export const notesReducer = (
    state = inititalState,
    action: { type: {}; payload: any }
) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};
