import React from 'react';
import PropTypes from 'prop-types';
import email from './images/email.svg';
import git from './images/logo-git.svg';

class Vizitka extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <div className="contact">
                    <img className="contact__img" src={email} alt="E-mail" />
                    <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
                </div>
                <div className="contact">
                    <img className="contact__img" src={git} alt="Logo GitHub" />
                    <p>{this.props.gitAccount}</p>
                </div>
            </div>
        );
    }

}

Vizitka.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gitAccount: PropTypes.string.isRequired,
};

export default Vizitka;
