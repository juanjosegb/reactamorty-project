import React from 'react'

import { Hidden, List, ListItem, ListItemIcon, makeStyles } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';

import { MenuItems } from '../../../../constants/MenuItems'
import { CustomNavLink } from '../../../Custom/NavLink'

const useStyles = makeStyles((theme: any) => ({
    inline: {
        display: 'inline-flex'
    }
}));

export const MainMenu = () => {

    const classes = useStyles();

    return (
        <Hidden only='xs'>
            <List className={classes.inline} >
                {MenuItems.map((menu: any, index: Number) => (
                    <ListItem button alignItems="center">
                        <ListItemIcon>
                            <AcUnitIcon />
                        </ListItemIcon>
                        <CustomNavLink to={menu.route}>{menu.text}</CustomNavLink>
                    </ListItem>
                ))}
            </List>
        </Hidden>
    )
}

