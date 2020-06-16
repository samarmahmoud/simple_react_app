
import React from 'react';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventNoteOutlined from '@material-ui/icons/EventNoteOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Typography from '@material-ui/core/Typography';
import {style} from '../../style'
import {  useTheme } from '@material-ui/core/styles';
import {useStyles} from '../../Screans/Home/style'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Swiper_Drawer(props) {
  const { window } = props;
  const theme = useTheme();
  const classes = useStyles();
  const container = window !== undefined ? () => window().document.body : undefined;

const drawer = (
        <div>
        <ListItem  button onClick={props.handleDrawerToggle}>
            <ListItemIcon >
                <ArrowForwardIosIcon style={{color:'#000'}} />
            </ListItemIcon>
            <ListItemIcon>
                <AccountCircleSharpIcon style={style.sideMenuIcon} />
            </ListItemIcon>
            <ListItemText primary={"samar"} />
        </ListItem>
        <Divider />
            <List>
                {['students', 'Dates', 'Sign out'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index === 0 ? <PeopleAlt style={style.sideMenuIcons} />
                            : index === 1 ? <EventNoteOutlined style={style.sideMenuIcons} />
                                : index === 2 ? <ExitToAppOutlinedIcon style={style.sideMenuIcons} />
                                    : <EventNoteOutlined style={style.sideMenuIcons} />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
);

    return (
        
        <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            {drawer}
        </SwipeableDrawer>
    )
}