import React from 'react';
import './Menus.css';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';

function Menus(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (
        <div className="cm_menu_links_container">
            <div className="cm_menu_items_mobile">
                <Button aria-controls="simple-menu" aria-haspopup="true" href="#">
                    <MenuSharpIcon htmlColor="#ffffff"/>
                </Button>
                <Menu
                    id="simple-menu"
                    keepMounted
                    open={Boolean(anchorEl)}
                >
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Legal Information</MenuItem>
                </Menu>
            </div>
            <div className="cm_menu_items_desktop">
                <div className="cm_menu_links_container">
                    <Link href="#" className='secondary' underline="hover">
                        About
                    </Link>
                    <Link href="#" className='secondary' underline="hover">
                        Contact
                    </Link>
                    <Link href="#" className='secondary' underline="hover">
                        Legal Information
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Menus;
