import React from "react";
import HomeEntry from "./HomeEntry";

const HomeEntries = () => {
    // let entries: Array<number> = [...Array(10).keys()];
    const  entries: Array<number> = Array.from(Array(25), Math.random);
    return (
        <div className="home__entries">
            {entries.map((c) => (
                <HomeEntry key={c} />
            ))}
        </div>
    );
};

export default HomeEntries;
