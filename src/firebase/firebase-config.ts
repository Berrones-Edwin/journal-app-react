import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALvGppJZZT5NUz_pP-2jPrI1gNLI7gfcs",
    authDomain: "journal-app-d1430.firebaseapp.com",
    projectId: "journal-app-d1430",
    storageBucket: "journal-app-d1430.appspot.com",
    messagingSenderId: "789013359642",
    appId: "1:789013359642:web:51a8d584ecce0f2c3fb5a3",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider =new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
