import React from "react";

import { Drawer, Grid, Hidden, List, ListItemIcon, ListItemText } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import { ActiveLinkStyle } from "../../../../constants/ActiveLinkStyle";
import { MenuItems } from "../../../../constants/MenuItems";
import { CustomSidenavMenuImage } from "../../../Custom/Image";
import { ListItemCenter } from "../../../Custom/ListItem";
import { CustomNavLinkSidenav } from "../../../Custom/NavLink";

export const SidenavMenu = (props: any) => {

    const { sideMenu, setSidenavMenu } = props;

    const toggleDrawer = (side: string, open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setSidenavMenu({ ...sideMenu, [side]: open });
    };

    const SideMenu = (side: any) => (

        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <CustomSidenavMenuImage src="https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png" />
            <List>
                {MenuItems.map((menu, index) => (
                    <CustomNavLinkSidenav key={index} to={menu.route} activeStyle={ActiveLinkStyle} exact={true}>
                        <ListItemCenter button>
                            <ListItemIcon style={{ minWidth: 0 }}>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText primary={menu.text} />
                        </ListItemCenter>
                    </CustomNavLinkSidenav>
                ))}
            </List>
        </div>
    );

    return (
        <Hidden only={['md', 'xl', 'lg']}>
            <Grid container alignContent="flex-end">
                <MenuIcon onClick={toggleDrawer('left', true)} />

                <Drawer style={{ textAlign: 'center', backgroundColor: "transparent" }} open={sideMenu.left} onClose={toggleDrawer('left', false)}>
                    {SideMenu('left')}
                </Drawer>
            </Grid>
        </Hidden>
    )
};
