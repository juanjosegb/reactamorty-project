import React from 'react';

import { CustomToolbar } from '@Components/Custom/Toolbar';
import { MainMenu } from '@Components/Layout/Header/MainMenu';
import { SidenavMenu } from '@Components/Layout/Header/SidenavMenu';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

const Header = () => {

    const [sideMenu, setSidenavMenu] = React.useState({ left: false });

    return (
        <Grid container item xs={12} spacing={0}>
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