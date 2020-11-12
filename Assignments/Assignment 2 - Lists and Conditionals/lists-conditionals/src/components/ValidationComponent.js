import React from 'react';

export const ValidationComponent = ({ textLength }) => {
    let result = null;

    if (textLength < 7) {
        result = (
            <div className="text-danger">Text too short.</div>
        );
    } else {
        result = (
            <div className="text-success">Text long enough.</div>
        )
    }

    return result;
};