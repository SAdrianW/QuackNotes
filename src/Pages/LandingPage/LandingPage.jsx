import { useState, useEffect } from "react";

import "./LandingPage.css";

const fetch = require('node-fetch');

export default function LandingPage({ start1 }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch('/api/duck')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setImage(data.url);
        })
    }, [])

    return (
        <div>
            <h2 className="stroke-orange heading">Like Quick Notes... but they Quack!</h2>
            <h3 className="stroke-orange para">Welcome to the Landing Pond of Quack Notes!</h3>
            <div className="flex-ctr-ctr flex-col">
                <img className="landing" src={image} alt="It's a Duck" />
                <button onClick={start1}>QUACK!</button>
            </div>

        </div>
    )
}