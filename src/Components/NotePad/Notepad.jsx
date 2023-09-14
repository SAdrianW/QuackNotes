import { Link } from "react-router-dom";
import './NotePad.css';

export default function NotePad({ note, deleteNote, start2, start3 }) { 

    return (
        <main className="flex-ctr-ctr flex-col">
            <div className="note-pad">
                <div className="text-bg">
                    <h4>{note.title}</h4>
                    <p>{note.text}</p>
                </div>
                <div className="row">
                    <button className="link-box" ><Link to="/notes" onClick={start2} >Back to the pond</Link></button>
                    <button className="link-box" ><Link to={`/notes/${note._id}/edit`} onClick={start3} >Edit</Link></button>
                    <button className="link-box" onClick={ () => deleteNote(note._id) } >DELETE</button>
                </div>
                <div className="row">
                    <p className="smaller " >Created: { new Date(note.createdAt).toLocaleString() }</p>
                    <p className="smaller " >Edited: { new Date(note.updatedAt).toLocaleString() }</p>
                </div>
            </div>
            {  note.image !== '' ? <img className="note-img" alt="" src={note.image} /> : <p></p> }
        </main>
    )
};
