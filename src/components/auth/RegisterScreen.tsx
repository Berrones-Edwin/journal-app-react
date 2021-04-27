import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="text"
                    placeholder="Username"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    autoComplete="off"
                    className="auth__input"
                />
                <button className="btn btn-primary btn-block mb-5" type="submit">
                    Register
                </button>

                
                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    );
};

export default RegisterScreen;
