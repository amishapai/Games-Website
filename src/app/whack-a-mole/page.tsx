"use client"; // This is a client-side component

import React, { useState, useEffect } from 'react';
import './whack-a-mole.css';
import { useRouter } from 'next/navigation';

const GRID_SIZE = 5; // Grid size for the game
const MAX_SCORE = 30; // Maximum score to win the game

const WhackAMole: React.FC = () => {
    const [molePosition, setMolePosition] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(49); // Timer countdown
    const router = useRouter();

    // Function to show the mole at random intervals and positions
    useEffect(() => {
        if (gameOver) return;

        const randomInterval = Math.random() * 1000 + 500; // Random interval between 500ms and 1500ms
        const timer = setTimeout(() => {
            const randomPosition = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
            setMolePosition(randomPosition);

            // Mole disappears after a short interval
            setTimeout(() => {
                setMolePosition(null);
            }, Math.random() * 400 + 300); // Mole stays for 300ms to 700ms
        }, randomInterval);

        return () => clearTimeout(timer);
    }, [molePosition, gameOver]);

    // Handle clicking a mole
    const handleClick = (index: number) => {
        if (index === molePosition) {
            setScore(score + 1);
            setMolePosition(null);
            if (score + 1 === MAX_SCORE) {
                setGameOver(true);
                router.push('/whack-happy'); // Automatically navigate to the success page
            }
        }
    };

    // Countdown Timer
    useEffect(() => {
        if (timeLeft <= 0) {
            router.push('/whack-sad'); // Redirect to the "end" page when the timer ends
        }
        const countdown = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timeLeft, router]);

    return (
        <div className="whack-a-mole-container">
            <h1 className="title">Whack-a-Mole!</h1>
            <h3 className="subtitle">Let's test your valo skills</h3>
            <h2 className="score">Score: {score}</h2>
            <h3 className="timer">Time Left: {timeLeft} seconds</h3>

            <div className={`grid ${gameOver ? 'hidden' : ''}`}>
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
                    <div
                        key={index}
                        className={`grid-item ${index === molePosition ? 'mole' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {index === molePosition && (
                            <img
                                src="/mole.png"
                                alt="Mole"
                                className="mole-image"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhackAMole;
