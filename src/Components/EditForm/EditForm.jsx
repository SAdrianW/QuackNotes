import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as notesServices from '../../Utilities/notes-service';

export default function EditForm({ notes }) {
    let { id } = useParams();
    const note = notes.find((n) => id === n._id);

    // console.log(id);
    // console.log(note);

    const [editedNote, setEditedNote] = useState( note );
    const navigate = useNavigate();
    // console.log(editedNote)

    async function editNote(note) {
        const editedNote = await notesServices.editNote(note, id);
        setEditedNote(editedNote);
    }
    
    function _handleChange(evt) {
        setEditedNote({...editedNote, [evt.target.name]: evt.target.value });
    }

    const _handleSubmit = async (evt) => {
        evt.preventDefault();
        await editNote(editedNote);
        // setEditedNote({
        //     title: '',
        //     text:''
        // });
        console.log(editedNote);
        navigate(`/notes/${note._id}`);
        // navigate(`/notes`);
    }

    return (
        <>
            <h3>EditedQuackForm: </h3>
            <form className="flex-ctr-ctr flex-col" onSubmit={ _handleSubmit }>
                <div>
                    <label className="flex-ctr-ctr" >Quack Title</label>
                    <input 
                    type="text"
                    name="title" 
                    value={ editedNote.title } 
                    placeholder="QUACK!"
                    onChange={ _handleChange } />
                </div>
                <div>
                    <label className="flex-ctr-ctr" >Quack Note</label>
                    <textarea 
                        cols="40" 
                        rows="20"
                        name="text"
                        value={editedNote.text} 
                        placeholder="Quack quack"
                        onChange={ _handleChange }
                    ></textarea>
                </div>
                <button>Keep this Quack!</button>
            </form>
            <Link to={`/notes/${note._id}`}>Cancel Edit</Link>
            {/* <Link to="/notes">Cancel Edit</Link> */}

        </>
    )
};

