import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import isEmail from "validator/es/lib/isEmail";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

// import validator from 'validator';

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msg } = useSelector((state: any) => state.ui);

    const [values, handleInputChange] = useForm({
        name: "edwin",
        email: "admin@gmail.com",
        password: "password",
        password2: "password",
    });
    const { name, email, password, password2 } = values;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isFormValid())
            dispatch(startRegisterWithEmailPasswordName(name, email, password));
    };

    const isFormValid = (): boolean => {
        let response = false;

        if (name.trim().length === 0) {
            response = false;
            dispatch(setError("The field name is required"));
        } else if (!isEmail(email)) {
            response = false;
            dispatch(
                setError("The field email is required, Email is not valid!")
            );
        } else if (
            password.trim().length === 0 ||
            password2.trim().length === 0
        ) {
            response = false;
            dispatch(setError("The field password is required"));
        } else if (password !== password2 || password.length < 5) {
            response = false;
            dispatch(
                setError(
                    "The field password should be at least 6 characters  and match each other"
                )
            );
        }

        dispatch(removeError());

        return response;
    };
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleSubmit}>
                {msg && <div className="auth__alert-error">{msg}</div>}
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Username"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    autoComplete="off"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
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
