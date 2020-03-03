import React from 'react';

import { ListItemMenu } from '@Components/Custom/ListItem';
import { Hidden, List, ListItemIcon, makeStyles } from '@material-ui/core';

import { ActiveLinkStyle } from '../../../../constants/ActiveLinkStyle';
import { MenuItems } from '../../../../constants/MenuItems';
import { CustomTopMenuImage } from '../../../Custom/Image';
import { CustomNavLink } from '../../../Custom/NavLink';

const useStyles = makeStyles((theme: any) => ({
    inline: {
        display: 'inline-flex'
    }
}));

export const MainMenu = () => {

    const classes = useStyles();

    return (
        <Hidden only={['xs', 'sm']}>
            <CustomTopMenuImage src="https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png" />
            <List className={classes.inline} >
                {MenuItems.map((menu: any, index: Number) => (
                    <CustomNavLink to={menu.route} activeClassName="active" activeStyle={ActiveLinkStyle} exact={true}>
                        <ListItemMenu button alignItems="center">
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            {menu.text}
                        </ListItemMenu>

                    </CustomNavLink>
                ))}
            </List>
        </Hidden>
    )
}

