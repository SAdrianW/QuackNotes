// import { useState } from "react";
import { Link } from "react-router-dom";
import './NotePad.css';

export default function NotePad({ note, deleteNote }) {
    // const [editView, setEditView] = useState(false);

    // if (editView === true) {
    //     return (
    //         <div className="edit-form">
    //             <h2>Edit "{note.title}"</h2>
    //             <editForm note={note} editNote={editNote} />
    //         </div>
    //     )
    // }

    return (
        <div className="note-pad">
            <h4>{note.title}</h4>
            <p>{note.text}</p>
            {/* <button onClick={ setEditView(!editView) } >Edit</button> */}
            {/* <button onClick={ () => editNote(note._id) } >Edit</button> */}
            <Link to={`/notes/${note._id}/edit`}>Edit</Link>
            <p>Created: { new Date(note.createdAt).toLocaleString() }</p>
            {/* <p>Edited: { new Date(note.updatedAt).toLocaleString() }</p> */}
            <button onClick={ () => deleteNote(note._id) } >&times;</button>
        </div>
    )
};
