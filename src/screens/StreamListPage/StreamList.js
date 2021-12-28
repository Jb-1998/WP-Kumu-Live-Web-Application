import React, { useState } from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import StreamsCard from '../../components/StreamsCard/StreamsCard'
// Router Link and Redux Connect
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const StreamList = (props) => {
    const [limit, setLimit] = useState(6);
    const showMoreDocuments = () => {
        setLimit(limit + 6);
    };
    const renderRowsWithItems = () => {

        return props.streamList.slice(0, limit).map((documentsRow, i) => {
            return (
                <Grid item xs={6} sm={6} md={4} lg={2} key={i}>
                    <Link
                        to={`/stream/${documentsRow.channel_id}`}
                        style={{ textDecoration: 'none' }}
                        state={{
                            username: documentsRow.username,
                            title: documentsRow.title,
                            avatar: documentsRow.avatar
                        }}>
                        <StreamsCard streamData={documentsRow} />
                    </Link>
                </Grid>
            );
        })
    }
    return (
        <Box>
            <Typography sx={{
                marginBottom: 2,
                color: '#FB2961',
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'CircularXXTT-Bold'
            }}>
                Streams
            </Typography>
            <Grid
                container
                spacing={2}
                sx={{
                    width: {
                        xs: '97vw',
                        sm: '96vw',
                        lg: props.isDrawerOpen ? '96vw' : '92vw'
                    },
                }}>
                {renderRowsWithItems()}
                <Grid
                    sx={{ justifyContent: 'center' }}
                    container
                    item
                    xs={props.isDrawerOpen ? 10 : 12}
                >
                    <Button
                        onClick={showMoreDocuments}
                        sx={{
                            textTransform: 'none',
                            textDecoration: 'underline',
                            color: '#FB2961',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            fontFamily: 'CircularXXTT-Bold'
                        }}
                    >
                        Show More
                    </Button>
                </Grid>
            </Grid>
        </Box>

    )
}

function mapStateToProps(state, ownProps) {
    return {
        cardLimits: state.drawerEvents.cardLimits,
        isDrawerOpen: state.drawerEvents.drawerStatus
    }
}
export default connect(mapStateToProps)(StreamList);