"use client";
import Link from 'next/link';
import React, { useState } from "react";
import "./tpuzz.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";


const imgSrc = "/orionus.png"; // Make sure this image is in the public folder

const App: React.FC = () => {
    const [text, setText] = useState<string>("Now try this one :))");
    const [isSolved, setIsSolved] = useState<boolean>(false);

    // Function to set the congratulatory message
    const set = () => {
        setText("GOOD JOB BBG GG!!");
        setIsSolved(true); // Show the next level button after solving
    };

    return (
        <>
            <h2 className="tag">{text}</h2>
            {!isSolved && <p className="difficulty">Difficulty: Hard</p>}
            <JigsawPuzzle 
                imageSrc={imgSrc}
                rows={5}
                columns={4}
                onSolved={set}

            />
            {/* Display Next Level button once the puzzle is solved */}
            {isSolved && (
                <Link href="/puzz-happy">
                    <button className="next-level-btn">
                        Next Game Unlocked!
                    </button>
                </Link>
            )}
        </>
    );
};

export default App;
