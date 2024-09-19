"use client"; // This is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';
import './trivia1-yay.css'; // Ensure this CSS file has the appropriate styles
import Link from 'next/link';

const Trivia1Yay: React.FC = () => {
    const router = useRouter();

    // Function to handle button click and navigate to the jigsaw puzzle game or home
    const handleNext = () => {
        router.push('/'); // Navigate back to the home page or next game
    };

    return (
        <div className="end-container">
            <h1 className="end-title">GOOD JOB </h1>

            {/* Custom GIF */}
            <div className="gif-container">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNyOXR3bGJhcDQ2aXR2N3pvZ29paHhmaW4xaGhvY2Nna21pcHBzayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wr7oA0rSjnWuiLJOY5/giphy.gif" alt="Game Over GIF" className="end-gif" />
            </div>

            {/* Instructions Paragraph */}
            <div className="instructions-container">
                <p className="instructions-heading">The next game is a jigsaw puzzle:</p>
                <ul className="instructions-list">
                    <li>You need to complete the task to move forward</li>
                    <li>If an image is placed correctly, it locks and won't move</li>
                    <li>Until the image is correct, the next level won't unlock</li>
                    <li>There are 3 levels with increasing difficulty</li>
                </ul>
            </div>

            {/* Next Button */}
            <Link href="/puzz1">
            <button onClick={handleNext} className="next-button">I'm Ready</button>
            </Link>
        </div>
    );
};

export default Trivia1Yay;
