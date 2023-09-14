import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NoteForm({ addNote, uploadImage, setImage, start2 }) {
    const [newNote, setNewNote] = useState({
        title: '',
        text: '',
        image: '' 
    });
    const navigate = useNavigate();

    // console.log(newNote) // logs out lines 6-8 as expected

    function _handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value });
    }

    async function _handleSubmit(evt) {
        evt.preventDefault();
        start2();
        const data = await uploadImage(); //cloudinary
        console.log(data)
        newNote.image = data.url;
        addNote(newNote);
        setNewNote({
            title: '',
            text: '',
            image: ''
        });
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
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button>Keep this Quack!</button>
            </form>
        </>
    )
};
