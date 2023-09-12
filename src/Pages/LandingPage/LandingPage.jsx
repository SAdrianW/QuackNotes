import { useState, useEffect } from "react";
// import fetch from "node-fetch";

import "./LandingPage.css";

const ROOT_URL = "https://random-d.uk/api";

// const express = require('express');
// const router = express.Router();
const fetch = require('node-fetch');

// const responseImg = await fetch(ROOT_URL);
// const bodyImg = await response.text();

export default function LandingPage() {

    // componentDidMount()

    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch('/api/duck')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setImage(data.url);
        })
        // .then(json => setData(json))
        // .catch(error => console.error(error));
    }, [])

  

    // router.get('/', async function(req, res, next) {
    //     const randomImg = await fetch(`${ROOT_URL}/quack`)
    //     .then(res => res.json())
    //     randomImg.repos = await fetch(randomImg.repos_url)
    //     .then(res => res.json())
    //     return randomImg;
    // })

    return (
        <div 
        className="landing"
        // style={{ backgroundImage: `url(${movie.posterPath})` }}
        style={{ backgroundImage: `url(${image})` }}
        // style={{ backgroundImage: `url(${JSON.stringify(data)})` }}
        // style={{ backgroundImage: `url(${body})` }}
        >
            <h2>Like Quick Notes... but they Quack</h2>
            <p>Welcome to the Landing Pond of Quack Notes!</p>
            {/* {data ? <p>{JSON.stringify(data, null, 2)}</p> : 'Loading...'} */}
        </div>
    )
}