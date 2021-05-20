import { types } from "../types/types";

const setError = (msg: string) => ({
    type: types.uiSetError,
    payload: msg,
});

const removeError = () => ({
    type: types.uiRemoveError,
});

export { setError, removeError };
