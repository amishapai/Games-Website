"use client";
import Link from 'next/link';
import React, { useState } from "react";
import "./spuz.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { useRouter } from "next/navigation"; // Import Next.js router
const imgSrc = "/mamama.jpeg";

const App: React.FC = () => {
    const [text, setText] = useState<string>("Puzzle #2");
    const [isSolved, setIsSolved] = useState<boolean>(false);

    // Function to set the congratulatory message
    const set = () => {
        setText("One down to go!");
        setIsSolved(true); // Show the next level button after solving
    };

    return (
        <>
            <h2 className="tag">{text}</h2>
            {!isSolved && <p className="difficulty">Difficulty: Medium</p>}
            <JigsawPuzzle
                imageSrc={imgSrc}
                rows={4}
                columns={4}
                onSolved={set}

            />
            {/* Display Next Level button once the puzzle is solved */}
            {isSolved && (
                <Link href="/puzz3">
                <button
                    className="next-level-btn"
                >
                    Next Level
                </button>
                </Link>
            )}
        </>
    );
};

export default App;
