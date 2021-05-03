import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import { loginInterface } from "../../models/login";

const LoginScreen = () => {
    const dispatch = useDispatch();

    const [values, setValues] = useState<loginInterface>({
        email: "email@gmail.com",
        password: "passowrd",
    });

    const reset = () => {
        setValues({
            email: "",
            password: "",
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const { email, password } = values;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(email, password));
        console.log(email, password);

        reset()
    };

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter your username"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={values.email}
                />
                <input
                    type="password"
                    placeholder="enter your password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={values.password}
                />
                <button className="btn btn-primary btn-block" type="submit">
                    Login
                </button>

                <div className="auth__social-network">
                    <p>Login with social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                src="https://img2.freepng.es/20180610/jeu/kisspng-google-logo-google-search-google-now-5b1dacc1ad0462.3234288415286714257087.jpg"
                                alt="Logo Google"
                                className="google-icon"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">
                    Create new account
                </Link>
            </form>
        </>
    );
};

export default LoginScreen;
