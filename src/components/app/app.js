import React from 'react';
import Header from '../header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../private-route';
import { HomePage, LoginPage, LogoutPage, ProfilePage } from '../pages';

import './app.scss';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/"
                        component={HomePage}
                        exact></Route>
                    <Route path="/login"
                        component={LoginPage}
                        exact></Route>
                    <Route path="/logout"
                        component={LogoutPage}
                        exact></Route>    
                    <PrivateRoute path="/profile" component = {ProfilePage}/> 
                </Switch>

            </Router>
        </div>

    );
}

export default App;