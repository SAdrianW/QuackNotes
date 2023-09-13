import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NoteForm({ addNote }) {
    const [newNote, setNewNote] = useState({
        title: '',
        text:''
    });
    // console.log(newNote)
    const navigate = useNavigate();

    function _handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value });
    }

    const _handleSubmit = (evt) => {
        evt.preventDefault();
        addNote(newNote);
        setNewNote({
            title: '',
            text:''
        });
        console.log(newNote)
        navigate("/notes")
    }

    return (
        <>
            <h3>NewQuackForm</h3>
            <form className="flex-ctr-ctr flex-col" onSubmit={ _handleSubmit }>
                <div>
                    <label className="flex-ctr-ctr" >Quack Title</label>
                    <input 
                    type="text"
                    name="title" 
                    value={ newNote.title } 
                    placeholder="QUACK!"
                    onChange={ _handleChange } />
                </div>
                <div>
                    <label className="flex-ctr-ctr" >Quack Note</label>
                    <textarea 
                        cols="40" 
                        rows="20"
                        name="text"
                        value={newNote.text} 
                        placeholder="Quack quack"
                        onChange={ _handleChange }
                    ></textarea>
                </div>
                <button>Keep this Quack!</button>
            </form>
        </>
    )
};
