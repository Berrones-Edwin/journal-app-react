import React from "react";
import { useSelector } from "react-redux";
import HomeEntry from "./HomeEntry";

const HomeEntries = () => {
    const { notes } = useSelector((s: any) => s.notes);
    return (
        <div className="home__entries">
            {notes.map((c: any) => (
                <HomeEntry key={c.id} {...c} />
            ))}
        </div>
    );
};

export default HomeEntries;
