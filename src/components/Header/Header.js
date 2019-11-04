import React from 'react';
import Logo from '../Logo/Logo';
import Menus from '../Menus/Menus';
import Box from '@material-ui/core/Box';

function Header(){
    return (
        <Box display="flex" justifyContent="space-between" style={{ width: '100%' }}>
            <Logo></Logo>
            <Menus></Menus>
        </Box>
    );
}

export default Header;
