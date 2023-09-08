import NotePad from "../../Components/NotePad/Notepad"

export default function NoteListPage({ notes }) {


    if (notes.length === 0) {
        return <h3>No Quacks in this pond. Go make some Quacks!</h3>
    }

    const notesList = notes.map((n) => (
        <div key={n._id}>
            <NotePad note={n}/>
        </div>
    ) )

    return (
        <main>
            <h1>NoteListPage</h1>
            { notesList }
        </main>
    )
};