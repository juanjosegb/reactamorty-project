import React from "react";

import { Button, Drawer, Hidden, List, ListItem, ListItemText } from "@material-ui/core";

import { MenuItems } from "../../../../constants/MenuItems";

export const SidenavMenu = (props: any) => {

    const { sideMenu, setSidenavMenu } = props;

    const toggleDrawer = (side: string, open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setSidenavMenu({ ...sideMenu, [side]: open });
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
        <Hidden only={['md', 'xl', 'sm']}>
            <Button onClick={toggleDrawer('left', true)}>Burger</Button>

            <Drawer open={sideMenu.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </Hidden>
    )
}
