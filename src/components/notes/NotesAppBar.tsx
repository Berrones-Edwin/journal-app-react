import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";


const NotesAppBar = () => {
    const { active: note } = useSelector((s: any) => s.notes);
    const dispatch = useDispatch();

    const handleSaveNote = () => {
        dispatch(startSaveNote(note));
    };
    const handleImageClick = () => {
        document.getElementById("file")?.click();
    };

    const handleImagechange = (e: any) => {


        const imageSelected = e.target.files[0];
        if (imageSelected){
            dispatch(startUploading(imageSelected))
        }
        // https://api.cloudinary.com/v1_1/dwa0boye6/upload
        // react-journal
    };
    return (
        <div className="notes__appbar">
            <span>28-08-2121</span>
            <input
                type="file"
                name="file"
                id="file"
                onChange={handleImagechange}
                style={{ display: "none" }}
            />
            <div>
                <button onClick={handleImageClick} className="btn">
                    Picture
                </button>
                <button onClick={handleSaveNote} className="btn">
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotesAppBar;
