import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import LayoutScreen from "@Screens/LayoutScreen";

function App() {
    return (
        <Router>
            <LayoutScreen />
        </Router>
    );
}

export default App;
