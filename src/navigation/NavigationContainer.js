import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import { styled } from "@mui/material/styles";
// Common Components
import SideBar from '../components/SideBarCollapse/SideBar';
import Header from '../components/Header/Header'
// router and request library
import NavigationRoutes from './navigation';
import axios from 'axios'

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    ...theme.mixins.toolbar
}));
const NavigationContainer = () => {

    const [streamList, setStreamList] = useState([])
    const getStreamList = () => {
        axios.get('https://liveapi.kumu.live/site/get-browse-live').then((res) => {
            setStreamList(res.data.data.lives)
        })
    }
    useEffect(() => {
        getStreamList()
    }, [])
    return (
        <div style={{
            backgroundColor: '#0F0B46',
            height: '100vh',
            width: '100vw',
            overflowX: 'hidden'
        }}>
            <Box>
                <CssBaseline />
                <Header />
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 2fr)"
                    sx={{
                        overflowX: 'hidden',
                        backgroundColor: '#0F0B46',
                        display: 'flex',
                        width: '100%',
                        height: {
                            xs: '100vh',
                            lg: '100%'
                        }
                    }}>
                    <Box gridColumn="span 0">
                        <SideBar users={streamList} />
                    </Box>
                    <Box
                        gridColumn="span 10"
                        sx={{
                            backgroundColor: '#0F0B46',
                            height: {
                                xs: '108vh',
                                lg: '100%'
                            }
                        }}>
                        <DrawerHeader />
                        <Container
                            sx={{
                                flexGrow: 1,
                                backgroundColor: '#0F0B46',
                                marginTop: '11vh',
                                paddingBottom: 10,
                            }}
                        >
                            <NavigationRoutes streamList={streamList} />
                        </Container>
                    </Box>
                </Box>

            </Box>
        </div>
    )
}

export default NavigationContainer;