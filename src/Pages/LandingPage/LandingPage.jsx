import "./LandingPage.css";

// const express = require('express');
// const router = express.Router();
// const fetch = require('node-fetch');

export default function LandingPage() {
    // const ROOT_URL = "https://random-d.uk/api";

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
        // style={{ backgroundImage: {randomImg} }}
        >
            <h2>Like Quick Notes... but they Quack</h2>
            <p>Welcome to the Landing Pond of Quack Notes!</p>
        </div>
    )
}