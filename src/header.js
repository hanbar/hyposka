import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="navigation">
                <Link className="navigation__logo" to={`${process.env.PUBLIC_URL}/`} />
                <nav className="navigation__link">
                    <Link to={`${process.env.PUBLIC_URL}/`}>O projektu</Link>
                    <Link to={`${process.env.PUBLIC_URL}/slavka`}>O Slávce</Link>
                    <Link to={`${process.env.PUBLIC_URL}/verca`}>O Verče</Link>
                    <Link to={`${process.env.PUBLIC_URL}/contact`}>Kontakt</Link>
                </nav>
            </div>
        </header>
    );

}

export default Header;
