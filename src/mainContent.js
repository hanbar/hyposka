import React from 'react';
import { Switch, Route } from "react-router-dom";
import Slavka from './slavka';
import Verca from './verca';
import Contact from './contact';
import Home from './home';

class MainContent extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Switch>
                <Route path="/slavka">
                    <Slavka />
                </Route>
                <Route path="/verca">
                    <Verca />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        );
    }

}

export default MainContent;
