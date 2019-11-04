import React from 'react';
import './Logo.css';
import Link from '@material-ui/core/Link';

function Logo(){
    return (
        <h2>
            <Link color="inherit" href="/" className='cm_link' underline="none">
                Consent Manager
            </Link>
        </h2>
    );
}

export default Logo;
