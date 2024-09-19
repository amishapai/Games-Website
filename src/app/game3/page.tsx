"use client"; // This is a client-side component

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './game3.css'; // Ensure this CSS file has the appropriate styles

const WORD = "CHARLOTTES WEB";
const MAX_ATTEMPTS = 11;

const Hangman: React.FC = () => {
    const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
    const [wrongAttempts, setWrongAttempts] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [isGameWon, setIsGameWon] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (isGameOver) {
            router.push('/whack-sad'); // Redirect to the end page if failed
        }
        if (isGameWon) {
            router.push('/hangman-happy'); // Redirect to the next page if won
        }
    }, [isGameOver, isGameWon, router]);

    // Function to handle letter guesses
    const handleGuess = (letter: string) => {
        if (isGameOver || isGameWon) return;

        const newGuessedLetters = new Set(guessedLetters);
        newGuessedLetters.add(letter);
        setGuessedLetters(newGuessedLetters);

        if (!WORD.includes(letter)) {
            setWrongAttempts(prev => prev + 1);
        }

        const isAllGuessed = WORD.split('').every(char => 
            char === ' ' || newGuessedLetters.has(char)
        );

        if (isAllGuessed) {
            setIsGameWon(true);
        } else if (wrongAttempts + 1>= MAX_ATTEMPTS) {
            setIsGameOver(true);
        }
    };

    const renderWord = () => {
        return WORD.split('').map((char, index) => 
            char === ' ' ? ' ' : (guessedLetters.has(char) ? char : '_')
        ).join(' ');
    };

    const handleKeyboardClick = (letter: string) => {
        handleGuess(letter.toUpperCase());
    };

    return (
        <div className="hangman-container">
            <h1 className="question">What's the first book made me cry?</h1>
            <h2 className="word">{renderWord()}</h2>
            <div className="keyboard">
                {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(letter => (
                    <button
                        key={letter}
                        onClick={() => handleKeyboardClick(letter)}
                        disabled={guessedLetters.has(letter)}
                        className="keyboard-button"
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <h2 className="attempts">Wrong Attempts: {wrongAttempts}/{MAX_ATTEMPTS}</h2>
        </div>
    );
};

export default Hangman;
