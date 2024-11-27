import React, { useState, useRef, useEffect } from 'react';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router-dom';

const Header = () => {
const [open, setOpen] = useState(false);
const anchorRef = useRef(null);
const baseUrl = process.env.REACT_APP_API_BASE_URL;
const navigate = useNavigate();

const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
};

const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    return;
    }
    setOpen(false);
};

const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
    event.preventDefault();
    setOpen(false);
    } else if (event.key === 'Escape') {
    setOpen(false);
    }
};

const handleLogout = async () => {
    const requestOption = {
        method: 'POST',
        Credential: 'include',
    }
    try {
        const url = `${baseUrl}/users/logout`;
        const response = await fetch(url, requestOption);
        if (response.ok) {
            localStorage.removeItem('user');
            alert('User logged out');
            navigate('/login');
        }
        else {
            alert('Failed to log out.');
        }
    }
    catch (err){
        console.error('Logout failed:', err.message);
        
    }    
} 
const prevOpen = useRef(open);
useEffect(() => {
    if (prevOpen.current === true && open === false) {
    anchorRef.current.focus();
    }
    prevOpen.current = open;
}, [open]);

return (
<header
    style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    }}
>
    {/* Logo */}
    <h1 style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
    <LockRoundedIcon style={{ fontSize: '30px' }} /> Secret Keeper
    </h1>
    {/* User Menu */}
    <Box>
    <Button
        ref={anchorRef}
        id='composition-button'
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        startIcon={<Avatar />}
        sx={{ textTransform: 'none', color: '#FFF' }}
    ></Button>
    <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-end'
        transition
        disablePortal
    >
        {({ TransitionProps, placement }) => (
        <Grow
            {...TransitionProps}
            style={{
            transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'right top',
            }}
        >
            <Paper>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                autoFocusItem={open}
                id='composition-menu'
                aria-labelledby='composition-button'
                onKeyDown={handleListKeyDown}
                sx={{ textTransform: 'none', color: '#2A5444' }}
                >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                    <AccountCircleIcon fontSize='small' />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                    <Logout fontSize='small' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                </MenuList>
            </ClickAwayListener>
            </Paper>
        </Grow>
        )}
    </Popper>
    </Box>
</header>
);
};

export default Header;

