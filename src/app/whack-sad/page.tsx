"use client"; // This is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';
import './whack-sad.css'; // Ensure this CSS file has the appropriate styles

const EndPage: React.FC = () => {
    const router = useRouter();

    // Function to handle button click and navigate back to whack-a-mole
    const handleTryAgain = () => {
        router.push('/whack-a-mole'); // Navigate back to the whack-a-mole page
    };

    return (
        <div className="end-container">
            <h1 className="end-title">sorry lil broo gotta whack that mole again :((</h1>

            {/* Custom GIF */}
            <div className="gif-container">
                <img src="https://media.giphy.com/media/2zUn8hAwJwG4abiS0p/giphy.gif?cid=790b7611q3r9twlbap46itv7zogoihxfin1hhoccgkmippsk&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Game Over GIF" className="end-gif" />
            </div>

            {/* Try Again Button */}
            <button onClick={handleTryAgain} className="try-again-button">Try Again</button>
        </div>
    );
};

export default EndPage;
