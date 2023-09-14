import { Link } from "react-router-dom";
import './NotePad.css';


export default function NotePad({ note, deleteNote, start2, start3 }) {

    return (
        <main className="flex-ctr-ctr">
            <div className="note-pad">
                <h4>{note.title}</h4>
                <p>{note.text}</p>
                <div className="row">
                    <Link className="link-box" to="/notes" onClick={start2} >Back to the pond</Link>
                    <Link className="link-box" to={`/notes/${note._id}/edit`} onClick={start3} >Edit</Link>
                </div>
                <img src={note.image} alt="img" />
                <div className="row">
                    <p className="smaller " >Created: { new Date(note.createdAt).toLocaleString() }</p>
                    <p className="smaller " >Edited: { new Date(note.updatedAt).toLocaleString() }</p>
                </div>
                <button onClick={ () => deleteNote(note._id) } >&times;</button>
            </div>
        </main>
    )
};
