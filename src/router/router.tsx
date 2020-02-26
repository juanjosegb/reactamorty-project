import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import CharactersScreen from "../screens/CharactersScreen";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={CharactersScreen}/>
        </Switch>
    )
};

export default Routes