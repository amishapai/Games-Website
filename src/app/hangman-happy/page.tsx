"use client"; // This is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';
import './hangman-happy.css'; // Ensure this CSS file has the appropriate styles
import Link from 'next/link';

const Trivia1Yay: React.FC = () => {
    const router = useRouter();

    // Function to handle button click and navigate to the jigsaw puzzle game or home
    const handleNext = () => {
        router.push('/'); // Navigate back to the home page or next game
    };

    return (
        <div className="end-container">
            <h1 className="end-title"> GOOD JOB  </h1>

            {/* Custom GIF */}
            <div className="gif-container">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2x0cDZkbW9kOHZwaWFvYnRxOW1janlnbnh1M2Ryd2Nkb2xjcG9neSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif" alt="Game Over GIF" className="end-gif" />
            </div>

            {/* Instructions Paragraph */}
            <div className="instructions-container">
                <p className="instructions-heading">Thank you for playing this game.
                </p>
                <p className="instructions-heading">You were successful.</p>
            </div>

            {/* Next Button */}
            <Link href="/yes-no">
            <button onClick={handleNext} className="next-button">Please provide Feedback</button>
            </Link>
        </div>
    );
};

export default Trivia1Yay;
