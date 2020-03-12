import React from "react";

import ExploreIcon from '@material-ui/icons/Explore';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export const MenuItems = [
    {
        text: 'Home',
        route: "/",
        icon: <HomeIcon />
    },
    {
        text: 'Characters',
        route: "/characters",
        icon: <PeopleAltIcon />
    },
    {
        text: 'Locations',
        route: "/locations",
        icon: <ExploreIcon />
    },
    {
        text: 'Episodes',
        route: "/episodes",
        icon: <MovieIcon />
    },
    {
        text: 'History',
        route: "/history",
        icon: <HistoryIcon />
    }
]; 