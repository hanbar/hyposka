import React from 'react';
import { Link } from "react-router-dom";

class MainContent extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <main>
            	<h1>404</h1>
                <Link to="/">Domů</Link>
            </main>
        );
    }

}

export default MainContent;
