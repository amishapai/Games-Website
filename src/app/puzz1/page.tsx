"use client";
import Link from 'next/link';
import React, { useState } from "react";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { useRouter } from "next/navigation"; // Import Next.js router
const imgSrc = "/toiletkid.jpeg";

const App: React.FC = () => {
    const [text, setText] = useState<string>("Solve the jigsaw bunny <3");
    const [isSolved, setIsSolved] = useState<boolean>(false);

    // Function to set the congratulatory message
    const set = () => {
        setText("woo that was easy, onwards cutie!");
        setIsSolved(true); // Show the next level button after solving
    };

    return (
        <>
            <h2 className="tag">{text}</h2>
            {!isSolved && <p className="difficulty">Difficulty: Easy</p>}
            <JigsawPuzzle
                imageSrc={imgSrc}
                rows={3}
                columns={3}
                onSolved={set}

            />
            {/* Display Next Level button once the puzzle is solved */}
            {isSolved && (
                <Link href="/puzzle2">
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
