import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
    return (
        <div>
            I'm Some other Page,
            <Link to="/">Go Back To Home</Link>
        </div>
    )
}

export default OtherPage;