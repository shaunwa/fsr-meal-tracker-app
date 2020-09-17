import React from 'react';

export const CenteredContainer = ({ children }) => (
    <div className="page">
        <div className="centered-container">
            {children}
        </div>
    </div>
);