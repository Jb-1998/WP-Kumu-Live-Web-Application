import React from 'react';
import { Box, Avatar } from '@mui/material';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'

const StreamView = (props) => {
    const location = useLocation();
    const { username, title, avatar } = location.state
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                flexDirection: 'column',
                width: '91vw'
            }}
        >
            <Box
                sx={{
                    height: '60vh',
                    backgroundColor: 'black',
                    width: props.isDrawerOpen ? '80vw' : '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        marginTop: '3vh',
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        width: 80,
                        position: 'relative',
                        justifyContent: 'center'
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '6.1rem',
                            width: '6.1rem',
                            borderRadius: '50%',
                            backgroundColor: '#FB2961',
                            borderColor: '#FB2961',
                            borderWidth: 10,
                            borderStyle: 'solid'
                        }}>
                        <Avatar
                            src={avatar}
                            sx={{ position: 'relative', height: '5.5rem', width: '5.5rem', borderWidth: 3, borderColor: '#fff', borderStyle: 'solid' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            bottom: -10,
                            left: 6,
                            position: 'absolute',
                            color: 'white',
                            backgroundColor: '#FB2961',
                            width: '5rem',
                            textAlign: 'center',
                            height: '4vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            borderWidth: 3,
                            borderStyle: 'solid',
                            borderColor: '#fff'
                        }}
                    >
                        <p>LIVE</p>
                    </Box>
                </Box>
                <Box sx={{ marginTop: -10, marginLeft: '2rem' }}>
                    <p
                        style={{
                            fontWeight: 'bold',
                            color: '#fff',
                            fontSize: '1.8rem',
                            fontFamily: 'CircularXXTT-Bold'
                        }}
                    >
                        {title}
                    </p>
                    <p
                        style={{
                            marginTop: -35,
                            color: '#c2c2c2',
                            fontSize: '1.2rem'
                        }}
                    >
                        @{username}
                    </p>
                </Box>
            </Box>
        </div >
    )
}

function mapStateToProps(state, ownProps) {
    return {
        cardLimits: state.drawerEvents.cardLimits,
        isDrawerOpen: state.drawerEvents.drawerStatus
    };
}
export default connect(mapStateToProps)(StreamView);