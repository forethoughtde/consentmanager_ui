import React from 'react';
import './Logo.css';
import { Router, Link } from "@reach/router"

function Logo(){
    return (
        <h2>
            <Link color="inherit" to="/" className='cm_link' underline="none">
                Consent Manager
            </Link>
        </h2>
    );
}

export default Logo;
