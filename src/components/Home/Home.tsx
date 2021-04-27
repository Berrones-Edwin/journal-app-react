import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <div className="home__main-content">
            <Sidebar />
            <main>
                <h1>Main Content</h1>
            </main>
        </div>
    );
};

export default Home;
