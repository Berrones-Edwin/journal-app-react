import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducers";
import { uiReducer } from "../reducers/uiReduces";

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes:notesReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
