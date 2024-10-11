import React, { useEffect, useState } from 'react';
import '../styles/index.css'; // Import the CSS file

const Banner = () => {
    const messages = [
        "Specialistläkare inom ortopedi och rygg kirurgi",
        "Boka tid på hemsidan eller ringa 070-582 21 42"
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false); // Start fade out

            setTimeout(() => {
                setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
                setShow(true); // Fade in the next message
            }, 500); // Wait for the fade out to complete before changing the text
        }, 5500); // 3 seconds visible + 0.5 seconds for fade out

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="banner">
            <p className={`banner-text ${show ? 'show' : ''}`}>{messages[currentMessageIndex]}</p>
        </div>
    );
};

export default Banner;

