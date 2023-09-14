import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as notesServices from '../../Utilities/notes-service';

export default function EditForm({ notes, uploadImage, image, setImage, start3 }) {
    let { id } = useParams();
    const note = notes.find((n) => id === n._id);


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
        start3()
        // const data = await uploadImage();
        // editedNote.image = data.url;
        await editNote(editedNote);
        setEditedNote({
            title: '',
            text:''
        });
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
                {/* <button value={editedNote.url} onClick={_handleChange}>Keep this image in this Quack</button> // my old ver */} 
                {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
                <button>Keep this Quack!</button>
            </form>
                {/* <div className="image-form"> // my old ver
                    <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                    <button onClick={uploadImage} value={url}>Upload</button>
                </div>
                <div>
                    <img src={url} alt='' />
                </div> */}
            <Link to={`/notes/${note._id}`}>Cancel Edit</Link>
            {/* <Link to="/notes">Cancel Edit</Link> */}

        </>
    )
};

