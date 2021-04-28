import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Some awesome title"
                    autoComplete="off"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="What happended today ? "
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://images.pexels.com/photos/7286190/pexels-photo-7286190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="text"
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteScreen;
