"use client"; // This is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';
import './puzz-happy.css'; // Ensure this CSS file has the appropriate styles
import Link from 'next/link';

const Trivia1Yay: React.FC = () => {
    const router = useRouter();

    // Function to handle button click and navigate to the jigsaw puzzle game or home
    const handleNext = () => {
        router.push('/'); // Navigate back to the home page or next game
    };

    return (
        <div className="end-container">
            <h1 className="end-title">NOT BAD BABES</h1>

            {/* Custom GIF */}
            <div className="gif-container">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNyOXR3bGJhcDQ2aXR2N3pvZ29paHhmaW4xaGhvY2Nna21pcHBzayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rBszdmXbzglQUX7N4j/giphy.gif" alt="Game Over GIF" className="end-gif" />
            </div>

            {/* Instructions Paragraph */}
            <div className="instructions-container">
                <p className="instructions-heading">The next game is really hard:</p>
                <ul className="instructions-list">
                    <li>No one in college skill lab could do it</li>
                    <li>But I believe your gamer ass can</li>
                    <li>It's Whack-a-mole!!</li>
                    <li>You have to right click on the mole in the grid</li>
                    <li><b>You have 49 seconds to get 30 points </b></li>
                    <li><b>If you fail to get 30 points you will go back repeat it.</b></li>
                </ul>
            </div>

            {/* Next Button */}
            <Link href="/whack-a-mole">
            <button onClick={handleNext} className="next-button">I'm Ready</button>
            </Link>
        </div>
    );
};

export default Trivia1Yay;
