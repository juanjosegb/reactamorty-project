import './App.css';
import React from 'react';
import LayoutScreen from "../screens/LayoutScreen";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <LayoutScreen/>
        </Router>
    );
}

export default App;
