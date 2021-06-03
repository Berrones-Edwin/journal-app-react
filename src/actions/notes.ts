import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
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

export const startLoadingNotes = (uid: any) => {
    return async (dispatch: any) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const activeNote = (id: any, note: any) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    },
});

export const setNotes = (notes: any) => ({
    type: types.notesLoad,
    payload: notes,
});

export const startSaveNote = (note: any) => {
    return async (dispatch: any, getState: any) => {
        const { uid } = getState().auth;

        if (!note.url) delete note.url;

        const noteToFirebase = { ...note };
        delete noteToFirebase.id;

        const response = db
            .collection(` ${uid}/journal/notes `)
            .doc(`${note.id}`);

        const existCollection = response.get();

        if ((await existCollection).exists) {
            response
                .update(noteToFirebase)
                .then(()=>{

                    dispatch(startUpdateNotes(note.id, noteToFirebase));
                })
                .catch(console.log);

        }
    };
};

export const startUpdateNotes = (id: any, note: any) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note,
        },
    },
});
