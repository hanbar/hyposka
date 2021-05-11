import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <header>
                <div className="navigation">
                    <Link className="navigation__logo" to="/" />
                    <nav className="navigation__link">
                        <Link to="/">O projektu</Link>
                        <Link to="/slavka">O Slávce</Link>
                        <Link to="/verca">O Verče</Link>
                        <Link to="/contact">Kontakt</Link>
                    </nav>
                </div>
            </header>
        );
    }

}

export default Header;
