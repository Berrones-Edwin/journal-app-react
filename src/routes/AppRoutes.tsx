import React, { useEffect, useState } from "react";
import { Redirect, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Auth from "./Auth";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import {  startLoadingNotes } from "../actions/notes";

const AppRoutes = () => {
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user?.uid, user?.displayName));


                dispatch(startLoadingNotes(user.uid));

                setIsLoggedIn(true);
            } else setIsLoggedIn(false);

            setChecking(false);
        });
    }, [dispatch]);

    if (checking) return <h3>Espere</h3>;

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoutes
                        isAuthenticated={isLoggedIn}
                        path="/auth"
                        component={Auth}
                    />

                    <PrivateRoutes
                        isAuthenticated={isLoggedIn}
                        component={Home}
                        exact
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
