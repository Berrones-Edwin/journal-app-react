import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface PublicRouteProps extends RouteProps {
    component: any;
    isAuthenticated: boolean;
}
const PublicRoutes = (props: PublicRouteProps) => {
    const { component: Component, isAuthenticated, ...rest } = props;
    return (
        <Route
            {...rest}
            component={(props:any) =>
                !isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
            }
        />
    );
};

export default PublicRoutes;
