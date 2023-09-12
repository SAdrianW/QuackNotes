import { useState, useEffect } from "react";

import "./LandingPage.css";

const fetch = require('node-fetch');

export default function LandingPage() {
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
        <div 
        className="landing"
        style={{ backgroundImage: `url(${image})` }}
        >
            <h2 className="stroke-orange heading">Like Quick Notes... but they Quack!</h2>
            <h3 className="stroke-orange para">Welcome to the Landing Pond of Quack Notes!</h3>
        </div>
    )
}