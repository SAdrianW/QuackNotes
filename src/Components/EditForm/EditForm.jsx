import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as notesServices from '../../Utilities/notes-service';

export default function EditForm({ notes, start3 }) {
    let { id } = useParams();
    const note = notes.find((n) => id === n._id);

    const [editedNote, setEditedNote] = useState( note );
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const uploadImage = (image) => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "react-uploads")
        data.append("cloud_name", "kazrion")
        return fetch(" https://api.cloudinary.com/v1_1/kazrion/image/upload ",{
            method:"post",
            body: data
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }



    async function editNote(note) {
        const editedNote = await notesServices.editNote(note, id);
        setEditedNote(editedNote);
    }
    
    function _handleChange(evt) {
        setEditedNote({...editedNote, [evt.target.name]: evt.target.value });
    }

    const _handleImageChange = (evt) => {
        setImage(evt.target.files[0]);
    }

    const _handleSubmit = async (evt) => {
        evt.preventDefault();
        start3()
        try {
            await uploadImage(image).then((data) => {
                editedNote.image = data.url;
            });
        } catch (err) {
            console.log(err);
        }
        await editNote(editedNote);
        console.log(editedNote);
        navigate(`/notes/${note._id}`);
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
                <input type="file" onChange={_handleImageChange} />
                <button>Keep this Quack!</button>
            </form>
            <Link to={`/notes/${note._id}`}>Cancel Edit</Link>
        </>
    )
};

