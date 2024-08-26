import React, { useEffect, useState } from 'react';


const Banner = () => {
    const messages = [
        "MR utan remiss",
        "7-12 dagar väntetid på MR",
        "Legitimerad naprapat",
        "Specialistläkare inom ortopedi och rygg kirurgi",
        "Boka tid på hemsidan eller ringa 070-582 21 42"
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2800); // Change message every 3 seconds

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="banner ">
            <p className="banner-text">{messages[currentMessageIndex]}</p>
        </div>
    );
};

export default Banner;
