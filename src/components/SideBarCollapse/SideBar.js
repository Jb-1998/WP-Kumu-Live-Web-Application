import React from 'react';
import { styled } from "@mui/material/styles";
import { connect } from 'react-redux'
import { makeStyles } from '@mui/styles'
import {
    List,
    Typography,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from '@mui/material'
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch } from 'react-redux'
import { openDrawer, closeDrawer } from '../../redux/models/DrawerEvents/action'

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`
    }
})

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: '6vh',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

const useStyles = makeStyles({
    paper: {
        background: '#0F0B46',
        color: '#fff',
        borderRightWidth: 2,
        borderRightStyle: 'solid',
        borderRightColor: 'gray'
    }
})

const MiniDrawer = (props) => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const dispatch = useDispatch()
    const handleDrawerOpen = () => {
        dispatch(openDrawer())
        setOpen(true);
    }

    const handleDrawerClose = () => {
        dispatch(closeDrawer())
        setOpen(false);
    }
    const renderUsersList = () => {
        return props.users.slice(0, 6).map((data, i) => {
            return (
                <ListItem key={i}>
                    <ListItemAvatar>
                        <Avatar
                            alt="User Image"
                            src={data.avatar}
                            sx={{
                                borderWidth: 2,
                                borderColor: '#4AEFE9',
                                borderStyle: 'solid'
                            }}
                        />
                    </ListItemAvatar>
                    <ListItemText primary={data.username} />
                </ListItem>
            )
        })
    }

    return (
        <Drawer
            variant="permanent"
            open={open}
            classes={{
                paper: classes.paper,
            }}
            sx={{
                flexGrow: 1,
                display: {
                    xs: 'none',
                    md: 'flex'
                },
            }}
        >
            <DrawerHeader />
            <IconButton
                onClick={open ? handleDrawerClose : handleDrawerOpen}
                disableRipple
                sx={{
                    display: 'flex',
                    justifyContent: open ? 'flex-end' : 'center'
                }}
            >
                {
                    open ?
                        <ChevronLeftIcon sx={{ color: '#4AEFE9' }} />
                        :
                        <ChevronRightIcon sx={{ color: '#4AEFE9' }} />
                }
            </IconButton>
            <Typography
                noWrap
                component="div"
                sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    color: '#FB2961',
                    justifyContent: open ? 'left' : 'center',
                    paddingLeft: open ? '1rem' : '0',
                    fontFamily: 'CircularXXTT-Bold'
                }}
            >
                Users
            </Typography>
            <List>
                {renderUsersList()}
            </List>
        </Drawer>
    )
}

export default connect()(MiniDrawer);