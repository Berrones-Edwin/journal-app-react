import { types } from "../types/types";

export const authReducer = (state = {}, action: { type: {}; payload: any }) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            };
        case types.logout:
            return {};

        default:
            return state;
    }
};
