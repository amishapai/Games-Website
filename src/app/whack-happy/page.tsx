"use client"; // This is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';
import './whack-happy.css'; // Ensure this CSS file has the appropriate styles
import Link from 'next/link';

const Trivia1Yay: React.FC = () => {
    const router = useRouter();

    // Function to handle button click and navigate to the jigsaw puzzle game or home
    const handleNext = () => {
        router.push('/'); // Navigate back to the home page or next game
    };

    return (
        <div className="end-container">
            <h1 className="end-title">!!GOOD JOB!!</h1>

            {/* Custom GIF */}
            <div className="gif-container">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWVyMmlkcXJwMTlpdDZhbjBobGJvamQ3NDJhNjFyOWc0amo0Y2hpcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26gssIytJvy1b1THO/giphy.gif" alt="Game Over GIF" className="end-gif" />
            </div>

            {/* Instructions Paragraph */}
            <div className="instructions-container">
                <p className="instructions-heading">All that valo does go somewhere damn, NOW ONWARDS!
                    <i> The Final Game.</i> 
                </p>
                <ul className="instructions-list">
                    <li>It's hangman!</li>
                    <li>A question is displayed.</li>
                    <li>You need to guess letters of the answer.</li>
                    <li><i>The answer has <b>2</b> words, there is no space gap provided.</i></li>
                    <li><b>You have 10 wrong attempts while guessing. </b></li>
                    <li><b>Beyond that your attempts won't count and you need to restart.</b></li>
                    <li><b><i>THE CATCH IS, you will need to redo whack-a-mole and the come back. So get it right!</i></b></li>

                </ul>
            </div>

            {/* Next Button */}
            <Link href="/game3">
            <button onClick={handleNext} className="next-button">Let's go.</button>
            </Link>
        </div>
    );
};

export default Trivia1Yay;
