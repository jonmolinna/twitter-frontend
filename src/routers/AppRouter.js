import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuthState } from '../context/auth';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
    let { user } = useAuthState();

    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    user? <Home /> : <Redirect to="/login" />
                )}
            />
            <Route
                exact
                path="/login"
                render={() => (
                    user? <Redirect to="/" /> : <Login />
                )}
            />
            <Route 
                exact
                path="/register"
                render={() => (
                    user? <Redirect to="/" /> : <Register />
                )}
            />
        </Switch>
    )
};

export default AppRouter;