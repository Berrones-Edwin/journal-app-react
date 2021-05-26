import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { addNewNote } from "../../actions/notes";
import HomeEntries from "./HomeEntries";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector((s: any) => s.auth);

    const handleSubmit = () => {
        dispatch(startLogout());
    };

    const handleNewNote = () => {
        dispatch(addNewNote());
    };

    return (
        <aside className="home__sidebar">
            <div className="home__siderbar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>
                <button className="btn" onClick={handleSubmit}>
                    logout
                </button>
            </div>
            <div onClick={handleNewNote} className="home__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>
            <HomeEntries />
        </aside>
    );
};

export default Sidebar;
