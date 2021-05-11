import logo from './images/logo.svg';
import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <footer>
                <div className="footer-end">
                    <img className="footer-end__logo" src={logo} alt="Logo" />
                    <p className="footer-end__text">© 2021 Slávka a Verča</p>
                </div>
            </footer>
        );
    }

}

export default Footer;
