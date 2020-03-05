import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";

import CharactersScreen from "../screens/Characters/CharactersScreen";
import {CharacterDetailScreen} from "../screens/Characters/DetailScreen";
import EpisodesScreen from "../screens/Episodes/EpisodesScreen";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import LocationsScreen from "../screens/Locations/LocationsScreen";
import {LocationDetailScreen} from "../screens/Locations/DetailScreen";
import {EpisodeDetailScreen} from "../screens/Episodes/DetailScreen";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={HomeScreen}/>

            <Route exact path="/characters" component={CharactersScreen}/>
            <Route path="/characters/:id" component={CharacterDetailScreen}/>

            <Route exact path="/episodes" component={EpisodesScreen}/>
            <Route path="/episodes/:id" component={EpisodeDetailScreen}/>

            <Route exact path="/locations" component={LocationsScreen}/>
            <Route path="/locations/:id" component={LocationDetailScreen}/>
            <Route component={NotFoundScreen}/>
        </Switch>
    )
};

export default Routes