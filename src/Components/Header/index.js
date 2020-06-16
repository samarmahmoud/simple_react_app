import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Button from '@material-ui/core/Button'
import logo from '../../Logo.png'
import { style } from '../../style'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: '#fff'
        },
        toolbar: theme.mixins.toolbar,
        logoHorizontallyCenter: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        },
        menueLeft: {
            position: 'absolute',
            left: '95%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        },
        sectionDesktop: {
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
    }),
);



export default function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className={classes.sectionDesktop}>
                    <Button style={{ color: '#fff', backgroundColor: '#3b5998' }}>{"en"}</Button>
                    <Button style={{ color: '#fff', backgroundColor: '#3b5998', marginLeft: '2%' }}>{"ar"}</Button>
                </div>

                <div className={classes.logoHorizontallyCenter}>
                    <img src={logo} style={{ height: '100%', width: '90%' }} alt="logo" />
                </div>
                <div>
                    <IconButton edge="start" onClick={props.handleDrawerToggle} className={classes.menueLeft} color="inherit" aria-label="menu">
                        <AccountCircleSharpIcon style={style.sideMenuIcon} />
                    </IconButton>
                </div>

            </Toolbar>

        </AppBar>
    );
}
