import React from "react";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";
type HomeEntryProps = {
    id: number;
    title: string;
    body: string;
    date: string;
    url: string;
};
const HomeEntry: React.FC<HomeEntryProps> = ({
    id,
    title,
    body,
    date,
    url,
}) => {
    const dispatch = useDispatch();
    const handleClickActive = () => {
        dispatch(activeNote(id, { title, body, date, url }));
    };
    return (
        <div className="home__entry pointer" onClick={handleClickActive}>
            {url && (
                <div
                    className="home__entry-picture"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: ` url(${url}) `,
                    }}
                ></div>
            )}
            <div className="home__entry-body">
                <p className="home__entry-title">{title}</p>
                <p className="home__entry-content">{body}</p>
            </div>
            <div className="home__entry-date-box">
                {/* <span>Monday</span>
                <h4>28</h4> */}
                {date}
            </div>
        </div>
    );
};

export default HomeEntry;
