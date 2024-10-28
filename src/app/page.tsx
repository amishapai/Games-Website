"use client"; // This is a client-side component

import React from 'react';
import Link from 'next/link';
import './globals.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome Birthday Girl</h1>
            
            {/* Space for GIF */}
            <div className="gif-space">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNyOXR3bGJhcDQ2aXR2N3pvZ29paHhmaW4xaGhvY2Nna21pcHBzayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GeimqsH0TLDt4tScGw/giphy.gif" alt="Welcome GIF" className="home-gif" />
            </div>

            {/* Body text with bullet points */}
            <div className="home-body">
                <p>You are now entering the best game of your life:</p>
                <ul>
                    <li>Advised to be on full screen on laptop in browser before playing</li>
                    <li>There is no special reward for completing the game, but i will meet you someday and gift you</li>
                    <li>There are 3 games - with increasing difficulty and bonus trivia</li>
                    <li><b>Each time you make an error you will have to repeat</b></li>
                </ul>
            </div>

            {/* ALL THE BEST text */}
            <h2 className="all-the-best">ALL THE BEST </h2>

            {/* Begin button */}
            <Link href="/trivia1">
                <button className="begin-button">Begin</button>
            </Link>
        </div>
    );
};

export default HomePage;
