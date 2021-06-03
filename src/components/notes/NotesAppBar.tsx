import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../actions/notes";

const NotesAppBar = () => {
    const { active: note } = useSelector((s: any) => s.notes);
    const dispatch = useDispatch();
    const handleSaveNote = () => {
        // console.log(note)
        dispatch(startSaveNote(note));
    };
    return (
        <div className="notes__appbar">
            <span>28-08-2121</span>
            <div>
                <button className="btn">Picture</button>
                <button onClick={handleSaveNote} className="btn">
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotesAppBar;
