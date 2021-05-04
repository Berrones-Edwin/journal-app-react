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

export { login, startGoogleLogin };
