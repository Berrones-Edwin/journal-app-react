import React from "react";

const HomeEntry = () => {
    return (
        <div className="home__entry pointer">
            <div
                className="home__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage:
                        "url('https://images.pexels.com/photos/7286190/pexels-photo-7286190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
                }}
            ></div>
            <div className="home__entry-body">
                <p className="home__entry-title">New day</p>
                <p className="home__entry-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero natus doloremque eveniet ut veniam consequatur nulla
                    at quibusdam quis? Vero?
                </p>
            </div>
            <div className="home__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};

export default HomeEntry;
