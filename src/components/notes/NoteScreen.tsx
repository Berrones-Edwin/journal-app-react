import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    const dispatch = useDispatch();

    const { active: noteActive } = useSelector((state: any) => state.notes);

    const [values, handleInputChange, reset] = useForm(noteActive);

    const { title, body, url } = values;

    const activeID = useRef(noteActive.id);

    useEffect(() => {
        if (activeID.current !== noteActive.id) {
            reset(noteActive);
            activeID.current = noteActive.id;
        }
    }, [noteActive, reset]);

    useEffect(() => {
        dispatch(activeNote(values.id, { ...values }));
    }, [values, dispatch]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Some awesome title"
                    autoComplete="off"
                    className="notes__title-input"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="body"
                    id="body"
                    placeholder="What happended today ? "
                    value={body}
                    onChange={handleInputChange}
                />

                {url && (
                    <div className="notes__image">
                        <img src={url} alt={title} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoteScreen;
