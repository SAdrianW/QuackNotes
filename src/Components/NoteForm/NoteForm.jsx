import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as notesServices from "../../Utilities/notes-service";

export default function NoteForm({ addNote, start2 }) {
    const [newNote, setNewNote] = useState({
        title: '',
        text: '',
        image: '' 
    });
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

    function _handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value });
    }

    const _handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const _handleSubmit = async (evt) => {
        evt.preventDefault();
        start2();
        try {
            await uploadImage(image).then((data) => {
                newNote.image = data.url;
            });
            setImage('');
        } catch (err) {
            console.log(err);
        }
        addNote(newNote);
        console.log(newNote)
        navigate("/notes")
    }

    return (
        <>
            <h3>New Quack Form</h3>
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
                <input type="file" onChange={_handleImageChange} />
                <button>Keep this Quack!</button>
            </form>
        </>
    )
};
