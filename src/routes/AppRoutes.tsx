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
                    <Route path="/auth" component={Auth} />
                    <Route  path="/" component={Home} />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
