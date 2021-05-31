import React from "react";
import { useSelector } from "react-redux";
import NoteScreen from "../notes/NoteScreen";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";

const Home = () => {
    const { active } = useSelector((s: any) => s.notes);
    return (
        <div className="home__main-content">
            <Sidebar />
            <main>{!active ? <NothingSelected /> : <NoteScreen />}</main>
        </div>
    );
};

export default Home;
