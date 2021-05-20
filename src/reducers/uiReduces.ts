import { types } from "../types/types";

const initialState = {
    loading: false,
    msg: null,
};
export const uiReducer = (
    state = initialState,
    action: { type: {}; payload: any }
) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msg: action.payload,
            };

        default:
            return state;
    }
};
