import React, { useState } from 'react';
import { Toolbar, AppBar, Box, Button, IconButton, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../assets/images/logo.png"
import NavigationDrawer from '../../components/NavigationBarCollapsed/NavigationBar'
import { Link } from 'react-router-dom';

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    }
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    }

    return (
        <>
            <NavigationDrawer openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} />
            <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
                <Toolbar sx={{
                    backgroundColor: '#0F0B46',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: 1,
                    borderBottomColor: 'white'
                }}>
                    <Box
                        component="img"
                        sx={{
                            height: {
                                xs: 40,
                                md: 50
                            },
                        }}
                        alt="Your logo."
                        src={Logo}
                    />
                    <Box sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        marginLeft: '6rem'
                    }}>
                        <Link to="/streams" style={{ textDecoration: 'none' }}>
                            <Button
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    textTransform: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'CircularXXTT-Bold'
                                }}
                            >
                                Streams
                            </Button>
                        </Link>

                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'flex',
                            md: 'none'
                        },
                        justifyContent: {
                            xs: 'flex-end',
                            md: 'none'
                        },
                    }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon sx={{ color: '#FB2961' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;