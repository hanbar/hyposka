import { Link } from "react-router-dom";

const MainContent = () => {

    return (
        <main>
        	<h1>404</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Domů</Link>
        </main>
    );

}

export default MainContent;
