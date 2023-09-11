export default function NotePad({ note, deleteNote }) {
    return (
        <div className="note-pad">
            <h4>{note.title}</h4>
            <p>{note.text}</p>
            <p>Created: { new Date(note.createdAt).toLocaleString() }</p>
            {/* <p>Edited: { new Date(note.updatedAt).toLocaleString() }</p> */}
            <button onClick={ () => deleteNote(note._id) } >&times;</button>
        </div>
    )
};