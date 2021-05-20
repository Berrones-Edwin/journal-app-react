import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import HomeEntries from "./HomeEntries";

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(startLogout());
    };

    return (
        <aside className="home__sidebar">
            <div className="home__siderbar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Edwin</span>
                </h3>
                <button className="btn" onClick={handleSubmit}>
                    logout
                </button>
            </div>
            <div className="home__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>
            <HomeEntries />
        </aside>
    );
};

export default Sidebar;
