import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";

import CharactersScreen from "../screens/CharactersScreen";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/characters" component={CharactersScreen} />
            <Route exact path="/episodes" component={HomeScreen} />
            <Route component={NotFoundScreen} />
        </Switch>
    )
};

export default Routes