import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";

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
        dispatch(startLoading());
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user?.uid, user?.displayName));
                dispatch(finishLoading());
            })
            .catch((e) => {
                console.log(e);
                dispatch(finishLoading());
            });
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
                console.log(user);
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

const startLogout = () => {
    return async (dispatch: any) => {
        await firebase.auth().signOut();

        dispatch(logout());
    };
};

const logout = () => ({
    type: types.logout,
});

export {
    login,
    startGoogleLogin,
    startRegisterWithEmailPasswordName,
    startLoginWithEmailPassword,
    startLogout,
    logout,
};
