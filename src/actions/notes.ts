import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const addNewNote = () => {
    return async (dispatch: any, getstate: any) => {
        const { uid } = getstate().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };

        const docRef = await db
            .collection(` ${uid}/journal/notes `)
            .add(newNote);

        dispatch(activeNote(docRef.id, newNote));
    };
};

export const activeNote = (id: any, note: any) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    },
});
