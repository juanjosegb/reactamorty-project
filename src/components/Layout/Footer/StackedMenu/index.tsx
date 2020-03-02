import React from 'react';
import {List, ListItemText} from "@material-ui/core";
import {MenuItems} from "../../../../constants/MenuItems";
import {ListItemCenter} from "../../../Custom/ListItem";
import {CustomNavLink} from "../../../Custom/NavLink";

const StackedMenu = () => {

    return (
        <List>
            {MenuItems.map((menu, index) => (
                <CustomNavLink to={menu.route} activeClassName="active">
                    <ListItemCenter button key={index}>
                        <ListItemText primary={menu.text} />
                    </ListItemCenter>
                </CustomNavLink>
            ))}
        </List>
    );
};

export default StackedMenu