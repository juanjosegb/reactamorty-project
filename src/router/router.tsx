import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";

import CharactersScreen from "@Screens/Characters/CharactersScreen";
import { CharacterDetailScreen } from "@Screens/Characters/DetailScreen";
import { EpisodeDetailScreen } from "@Screens/Episodes/DetailScreen";
import EpisodesScreen from "@Screens/Episodes/EpisodesScreen";
import HomeScreen from "@Screens/HomeScreen";
import { LocationDetailScreen } from "@Screens/Locations/DetailScreen";
import LocationsScreen from "@Screens/Locations/LocationsScreen";
import NotFoundScreen from "@Screens/NotFoundScreen";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />

            <Route exact path="/characters" component={CharactersScreen} />
            <Route path="/characters/:id" component={CharacterDetailScreen} />

            <Route exact path="/episodes" component={EpisodesScreen} />
            <Route path="/episodes/:id" component={EpisodeDetailScreen} />

            <Route exact path="/locations" component={LocationsScreen} />
            <Route path="/locations/:id" component={LocationDetailScreen} />
            <Route component={NotFoundScreen} />
        </Switch>
    )
};

export default Routes