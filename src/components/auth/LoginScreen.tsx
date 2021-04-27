import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form>
                <input
                    type="text"
                    placeholder="enter your username"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="enter your password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
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
                <Link to="/auth/register">Create new account</Link>
            </form>
        </>
    );
};

export default LoginScreen;
