import React from "react";
import {
    Link,
    Route,
    Switch
} from "react-router-dom";

import App from "../app/App";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    )
}

export default Routes