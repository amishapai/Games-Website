"use client"; // This is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';
import './trivsad.css'; // Ensure this CSS file has the appropriate styles

const EndPage: React.FC = () => {
    const router = useRouter();

    // Function to handle button click and navigate back to whack-a-mole
    const handleTryAgain = () => {
        router.push('/trivia1'); // Navigate back to the home page
    };

    return (
        <div className="end-container">
            <h1 className="end-title">Oops that's wrong :((</h1>

            {/* Custom GIF */}
            <div className="gif-container">
                <img src="https://media.giphy.com/media/3OhXBaoR1tVPW/giphy.gif?cid=790b7611p5ushdx3y2x5la1jg06wlxb5l5k5vqau6qm7rj3f&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Game Over GIF" className="end-gif" />
            </div>

            {/* Try Again Button */}
            <button onClick={handleTryAgain} className="try-again-button">Try Again</button>
        </div>
    );
};

export default EndPage;
