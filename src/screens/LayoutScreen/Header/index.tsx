import React from 'react';

import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

import { CustomToolbar } from '../../../components/Custom/Toolbar';
import { MainMenu } from '../../../components/Layout/Header/MainManu';
import { SidenavMenu } from '../../../components/Layout/Header/SidenavMenu';

const Header = () => {

    const [sideMenu, setSidenavMenu] = React.useState({ left: false });

    return (
        <Grid item xs={12} spacing={0}>
            <AppBar position="fixed">
                <CustomToolbar>
                    <MainMenu />
                    <SidenavMenu sideMenu={sideMenu} setSidenavMenu={setSidenavMenu} />
                </CustomToolbar>
            </AppBar>
        </Grid>
    );
};


export default Header