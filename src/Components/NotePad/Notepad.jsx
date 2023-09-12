// import { useState } from "react";
import { Link } from "react-router-dom";
import './NotePad.css';

// TODO: move edit/ delete to show view
// TODO: truncate text, full view on show

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
        <main className="flex-ctr-ctr">
            <div className="note-pad">
                <h4>{note.title}</h4>
                <p>{note.text}</p>
                <Link to={`/notes/${note._id}/edit`}>Edit</Link>
                <div className="row">
                    <p className="smaller" >Created: { new Date(note.createdAt).toLocaleString() }</p>
                    <p className="smaller" >Edited: { new Date(note.updatedAt).toLocaleString() }</p>
                </div>
                <button onClick={ () => deleteNote(note._id) } >&times;</button>
            </div>
        </main>
    )
};
