import React, { Suspense,lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const LoginScreen = lazy(()=>import('../components/auth/LoginScreen'))
const RegisterScreen = lazy(()=>import('../components/auth/RegisterScreen'))

const Auth = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route
                            exact
                            path="/auth/login"
                            component={LoginScreen}
                        />
                        <Route
                            exact
                            path="/auth/register"
                            component={RegisterScreen}
                        />
                        <Redirect to="/auth/login" />
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
};

export default Auth;
