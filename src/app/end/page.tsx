"use client"; // This is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';
import './end.css'; // Ensure this CSS file has the appropriate styles

const YesNoPage: React.FC = () => {
    const router = useRouter();

    // Function to navigate back to the beginning page
    const handleGoHome = () => {
        router.push('/'); // Navigate to the home page
    };

    return (
        <div className="yes-no-container">
            <img src="/peace.jpeg" alt="Big Image" className="big-image" />
            <h1 className="yes-no-title">YAY!! Ilysm Happy birthday!</h1>
            <button onClick={handleGoHome} className="go-home-button">Go Back to Beginning</button>
        </div>
    );
};

export default YesNoPage;
