import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Auth from "./Auth";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route  path="/auth" component={Auth} />
                    <Route exact path="/" component={Home} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
