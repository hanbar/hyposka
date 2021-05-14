import { BrowserRouter as Router } from "react-router-dom";
import Header from './header';
import Main from './mainContent';
import Footer from './footer';

const App = () => {

    return (
        <Router basename={'/hyposka'}>
            <Header className="App-header" />
            <Main/>
            <Footer/>
        </Router>
    );

}

export default App;
