import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

import { Grid } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import { MenuItems } from '../../../constants/MenuItems';

const Header = () => {


    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (side: string, open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = (side: any) => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {MenuItems.map((menu, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={menu.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <Grid item xs={12} spacing={0}>
            <AppBar position="fixed">
                <Toolbar>
                    <Hidden only='xs'>
                        <Grid container >
                            {MenuItems.map((menu: any, index: Number) => (
                                <Grid item spacing={3} xs={12} md={1} lg={1}>
                                    <NavLink to={menu.route}>{menu.text}</NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </Hidden>


                    {
                        /*De aquí se puede sacar un componente hamburguer menú*/
                    }
                    <Hidden only={['md', 'xl', 'sm']}>
                        <Button onClick={toggleDrawer('left', true)}>Burger</Button>
                    </Hidden>


                </Toolbar>
            </AppBar>

            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </Grid>
    );
};


export default Header