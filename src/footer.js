import logo from './images/logo.svg';

const Footer = () => {

    return (
        <footer>
            <div className="footer-end">
                <img className="footer-end__logo" src={logo} alt="Logo" />
                <p className="footer-end__text">© 2021 Slávka a Verča</p>
            </div>
        </footer>
    );

}

export default Footer;
