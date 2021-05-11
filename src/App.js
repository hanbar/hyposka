import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './header';
import Main from './mainContent';
import Footer from './footer';

class App extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Router>
                <Header className="App-header" />
                <Main/>
                <Footer/>
            </Router>
        );
    }

}

export default App;
