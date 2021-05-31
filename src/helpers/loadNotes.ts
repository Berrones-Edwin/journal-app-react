import { db } from "../firebase/firebase-config";


export const loadNotes = async (uid: any) => {
    const notes: any[] = [];


    const citiesRef = db.collection(` ${uid}/journal/notes `)
    const snapshot = await citiesRef.get();
    snapshot.forEach((doc) => {
        notes.push({
            id:doc.id,
            ...doc.data()
        })
    });
    return notes;
};
