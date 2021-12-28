import React from 'react';
import { Card, CardActionArea, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
const StreamsCard = (props) => {

    return (
        <Paper
            elevation={24}
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexDirection: 'column',
                minWidth: 100,
                height: 360,
                borderStyle: 'solid',
                borderWidth: 4,
                borderColor: '#FB2961',
                borderRadius: 4,
                backgroundImage: `url(${props.streamData.cover_image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <CardActionArea sx={{ textDecoration: 'none' }}>
                <Card sx={{
                    borderRadius: 5,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    elevation: 25,
                    color: 'white',
                    position: 'relative',
                    left: '55%',
                    width: 'auto',
                    maxWidth: '42%',
                    height: '70%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `translate(0%, 0%)`
                }}
                >
                    <VisibilityIcon sx={{ marginRight: 1, fontSize: 15, }} />
                    <p style={{ textDecoration: 'none', }}>{props.streamData.audience_count}</p>
                </Card>
            </CardActionArea>
            <CardActionArea>
                <Card sx={{
                    borderRadius: 2,
                    backgroundColor: '#261067',
                    color: 'white',
                    position: 'relative',
                    top: '1.5rem',
                    paddingLeft: '0.6rem',
                    left: '50%',
                    width: '95%',
                    transform: `translate(-50%, -50%)`
                }}>
                    <h3 style={{
                        fontSize: '1.1rem',
                        textOverflow: 'ellipsis',
                        width: 180,
                        overflow: 'hidden',
                        display: 'inline-block',
                        whiteSpace: 'nowrap'
                    }}>{props.streamData.title}</h3>
                    <p style={{ marginTop: -18 }}>@{props.streamData.username}</p>
                </Card>
            </CardActionArea>
        </Paper>
    )
}

export default StreamsCard;