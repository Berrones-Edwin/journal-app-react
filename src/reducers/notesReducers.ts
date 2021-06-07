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
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload],
            };
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map((note: any) => {
                    return note.id === action.payload.id
                        ? action.payload.note
                        : note;
                }),
            };
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter((n: any) => n.id !== action.payload),
            };
        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: [],
            };
        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes],
            };
        default:
            return state;
    }
};
