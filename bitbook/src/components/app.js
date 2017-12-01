import React from "react";
import { Switch, Route } from "react-router-dom";

import Welcome from './login/welcome';
import HomePage from "./main/homePage";
import { authenticationService } from "../services/authenticationService";

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return authenticationService.isUserAuthenticated()
            ? <HomePage />
            : <Welcome />;
    }
}

export default App;
