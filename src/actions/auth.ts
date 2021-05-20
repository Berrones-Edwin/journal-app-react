import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

const login = (
    uid: string | undefined,
    displayName: string | null | undefined
) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    },
});

const startLoginWithEmailPassword = (email: string, password: string) => {
    return (dispatch: any) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                login(user?.uid, user?.displayName);
            })
            .catch((e) => console.log(e));
    };
};
const startRegisterWithEmailPasswordName = (
    name: string,
    email: string,
    password: string
) => {
    return (dispatch: any) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user?.updateProfile({
                    displayName: name,
                });
                login(user?.uid, user?.displayName);
            })
            .catch((err) => console.log(err));
    };
};

const startGoogleLogin = () => {
    return (dispatch: any) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                login(user?.uid, user?.displayName);
            })
            .catch((err) => console.log(err));
    };
};

export { login, startGoogleLogin, startRegisterWithEmailPasswordName };
