export default function NotePad({ note }) {
    return (
        <div className="note-pad">
            <h4>{note.title}</h4>
            <p>{note.text}</p>
            <p>{ new Date(note.createdAt).toLocaleString() }</p>
        </div>
    )
};