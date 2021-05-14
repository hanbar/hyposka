import PropTypes from 'prop-types';
import email from './images/email.svg';
import git from './images/logo-git.svg';

const Vizitka = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <div className="contact">
                <img className="contact__img" src={email} alt="E-mail" />
                <a href={`mailto:${props.email}`}>{props.email}</a>
            </div>
            <div className="contact">
                <img className="contact__img" src={git} alt="Logo GitHub" />
                <p>{props.gitAccount}</p>
            </div>
        </div>
    );

}

Vizitka.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gitAccount: PropTypes.string.isRequired,
};

export default Vizitka;
