import React from "react";

const Sidebar = () => {
    return (
        <aside className="home__sidebar">
            <div className="home__siderbar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Edwin</span>
                </h3>
            <button className="btn">logout</button>
            </div>
            <div className="home__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
