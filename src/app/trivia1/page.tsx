"use client"; // This is a client-side component

import React from 'react';
import Link from 'next/link';
import './trivia1.css'; // Ensure this CSS file has the appropriate styles

const Trivia1: React.FC = () => {
    return (
        <div className="trivia-container">
            <h1 className="trivia-question">Who would win in a fight?</h1>
            <div className="trivia-buttons">
                {/* Button with image linking to trivia1-yay */}
                <Link href="/trivia1-yay">
                    <button className="trivia-button">
                        <img src="/pfft.jpeg" alt="Option 1" className="button-image" />
                    </button>
                </Link>
                
                {/* Button with image linking to whack-sad */}
                <Link href="/Trivsad">
                    <button className="trivia-button">
                        <img src="/me-white.jpeg" alt="Option 2" className="button-image" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Trivia1;
