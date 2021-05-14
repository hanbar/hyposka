import { Switch, Route } from "react-router-dom";
import Slavka from './slavka';
import Verca from './verca';
import Contact from './contact';
import Home from './home';
import NoMatch from './noMatch';

const MainContent = () => {

        return (
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/slavka`}>
                    <Slavka />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/verca`}>
                    <Verca />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/contact`}>
                    <Contact />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/`}>
                    <Home />
                </Route>
                <Route component={NoMatch} />
            </Switch>
        );

}

export default MainContent;
