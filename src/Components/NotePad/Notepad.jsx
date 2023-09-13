// import { useState } from "react";
import { Link } from "react-router-dom";
import './NotePad.css';


export default function NotePad({ note, deleteNote }) {
    // const [image, setImage] = useState('');
    // const [url, setUrl] = useState('');

    // const uploadImage = () => {
    //     const data = new FormData()
    //     data.append("file", image)
    //     data.append("upload_preset", "react-uploads")
    //     data.append("cloud_name","kazrion")
    //     fetch(" https://api.cloudinary.com/v1_1/kazrion/image/upload ",{
    //         method:"post",
    //         body: data
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setUrl(data.url)
    //     })
    //     .catch(err => console.log(err))
    // }
        
    

    return (
        <main className="flex-ctr-ctr">
            <div className="note-pad">
                <h4>{note.title}</h4>
                <p>{note.text}</p>
                <div className="row">
                    <Link className="link-box" to="/notes" >Back to the pond</Link>
                    <Link className="link-box" to={`/notes/${note._id}/edit`} >Edit</Link>
                </div>

                {/* <div className="image-form">
                    <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                    <button onClick={uploadImage}>Upload</button>
                </div>
                <div>
                    <img src={url} alt='' />
                </div> */}

                <div className="row">
                    <p className="smaller " >Created: { new Date(note.createdAt).toLocaleString() }</p>
                    <p className="smaller " >Edited: { new Date(note.updatedAt).toLocaleString() }</p>
                </div>
                <button onClick={ () => deleteNote(note._id) } >&times;</button>
            </div>
        </main>
    )
};
