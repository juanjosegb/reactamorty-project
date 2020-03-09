import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import LayoutScreen from "@Screens/LayoutScreen";
import { store } from '@Store/index'

function App() {

    return (
        <Provider store={store}>
            <Router>
                <LayoutScreen />
            </Router>
        </Provider>
    );
}

export default App;
