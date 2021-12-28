import React from 'react';
import { makeStyles } from '@mui/styles'
import { Box, Button, IconButton, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../assets/images/logo.png"
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    paper: {
        background: '#0F0B46',
        color: '#fff',
        borderRightWidth: 2,
        borderRightStyle: 'solid',
        borderRightColor: 'gray'
    }
})

const NavigationDrawer = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const navigateStreams = () => {
        navigate('/streams')
        props.handleDrawerClose()
    }
    return (
        <Drawer
            anchor={'right'}
            open={props.openDrawer}
            classes={{
                paper: classes.paper
            }}
            sx={{
                flexFlow: 1,
                display: {
                    xs: 'flex',
                    md: 'none'
                },

                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Box
                sx={{
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '1rem'
                }}
            >
                <IconButton
                    onClick={props.handleDrawerClose}
                    disableRipple
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginRight: 2
                    }}>
                    <CloseIcon sx={{ color: '#FB2961' }} fontSize='large' />
                </IconButton>

            </Box>
            <Button
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    marginLeft: 5,
                    textTransform: 'none',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#FB2961',
                    fontFamily: 'CircularXXTT-Bold'
                }}
                onClick={navigateStreams}
            >
                Streams
            </Button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: '70vh',
            }}>
                <img src={Logo} height={'50vh'} width={'100vh'} alt="kumu-logo.png" />
            </div>
        </Drawer>
    )
}

export default NavigationDrawer;