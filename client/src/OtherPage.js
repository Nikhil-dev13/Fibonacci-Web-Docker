import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I'm Some other Page,
            <Link to="/">Go Back To Home</Link>
        </div>
    )
}