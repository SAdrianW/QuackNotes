import { Link } from "react-router-dom";

export default function NotePadSmall({ note, deleteNote, start1 }) {

    return (
        <div className="note-pad-s">
            <h4>{note.title}</h4>
            <p className="truncate">{note.text}</p>
            <Link to={`/notes/${note._id}`} onClick={start1} >Details</Link>
        </div>
    )
};
