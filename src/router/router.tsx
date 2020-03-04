import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";

import CharactersScreen from "../screens/Characters/CharactersScreen";
import { CharacterDetailScreen } from "../screens/Characters/DetailScreen";
import EpisodesScreen from "../screens/EpisodesScreen";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />

            <Route exact path="/characters" component={CharactersScreen} />
            <Route path="/characters/:id" component={CharacterDetailScreen} />

            <Route exact path="/episodes" component={EpisodesScreen} />
            <Route component={NotFoundScreen} />
        </Switch>
    )
};

export default Routes