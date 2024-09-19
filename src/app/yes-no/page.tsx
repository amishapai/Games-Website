"use client"; // Add this at the top of your file

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Begin() {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '300px', left: '300px' });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  // Function to move the "No" button randomly on hover
  const moveNoButton = (e: MouseEvent) => {
    const noButton = noButtonRef.current;
    if (!noButton) return;

    const buttonRect = noButton.getBoundingClientRect();
    const distance = 100; // Distance it will move

    // Check the mouse proximity to the button
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate new positions
    let newLeft = buttonRect.left + Math.random() * distance * (Math.random() > 0.5 ? 1 : -1);
    let newTop = buttonRect.top + Math.random() * distance * (Math.random() > 0.5 ? 1 : -1);

    // Keep the button within the screen bounds
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    if (newLeft < 0) newLeft = 0;
    if (newLeft + buttonWidth > screenWidth) newLeft = screenWidth - buttonWidth;
    if (newTop < 0) newTop = 0;
    if (newTop + buttonHeight > screenHeight) newTop = screenHeight - buttonHeight;

    // Update the button position
    setNoButtonPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const noButton = noButtonRef.current;
      if (noButton) {
        const rect = noButton.getBoundingClientRect();
        const proximityThreshold = 200; // How close the mouse can get before the button moves

        // Calculate distance between mouse and the button
        const distanceToButton = Math.hypot(
          e.clientX - (rect.left + rect.width / 2),
          e.clientY - (rect.top + rect.height / 2)
        );

        // Move the button if the mouse gets too close
        if (distanceToButton < proximityThreshold) {
          moveNoButton(e);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px", backgroundColor: "#f2e6d9", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",}}>
        <h1 style={{ 
        marginBottom: "20px", 
        fontSize: "48px",  // Adjust font size as needed
        fontFamily: "'Garamond', serif", // Use a pretty font (Google Font 'Poppins' as an example)
        fontWeight: "bold", 
        color: "black", // Change color to black
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" // Optional: add a soft shadow for a prettier look
      }}>
        Was this the best game of your life?
      </h1>
      {/* Subtitle */}
      <h2 style={{
        marginBottom: "20px", 
        fontSize: "24px",  // Smaller subtitle size
        fontFamily: "'Poppins', sans-serif", 
        fontStyle: "italic", // Italicized style
        color: "black",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" // Soft shadow like the main title
      }}>
        Try to press no, I dare you
      </h2>

      {/* Display the GIF in the middle */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif?cid=790b7611svraja91zacz82fm7zhv4ffsnjn1bin0yewqb9hv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Game GIF"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </div>

      {/* Yes Button */}
      <div style={{ display: "flex", gap: "20px", position: "relative" }}>
        <Link href="/end">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "5px",
              backgroundColor: "#d9b4eb", // light pastel pink
              transition: "background-color 0.3s ease",
              color: "black",
            }}
          >
            Yes
          </button>
            
        </Link>
        </div>
        {/* No Button */}
        <div style={{ display: "flex", gap: "20px", position: "relative" }}></div>
        <button
          ref={noButtonRef}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
            position: "absolute",
            top: noButtonPosition.top,
            left: noButtonPosition.left,
            border: "2px solid black",
            borderRadius: "5px",
            backgroundColor: "#d9b4eb", // light pastel pink
            transition: "background-color 0.3s ease",
            color: "black",
          }}
        >
          No
        </button>
      </div>
  );
}
