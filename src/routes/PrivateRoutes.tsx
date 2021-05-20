import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
    component: any;
    isAuthenticated: boolean;
}
const PrivateRoutes = (props: PrivateRouteProps) => {
    const { component: Component, isAuthenticated, ...rest } = props;
    return (
        <Route
            {...rest}
            component={(props:any) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
            }
        />
    );
};

export default PrivateRoutes;
