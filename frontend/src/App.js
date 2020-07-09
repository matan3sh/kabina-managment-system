import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import utilService from './services/utilService';

import Navbottom from './components/layout/Navbottom';
import Alert from './components/shared/Alert';

import Home from './components/pages/Home';
import MovieDetails from './components/pages/MovieDetails';
import Transfers from './components/pages/Transfers';
import Messages from './components/pages/Messages';
import Profile from './components/pages/Profile';
import About from './components/pages/About';

import Login from './components/auth/Login';

import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  utilService.setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/movie' component={MovieDetails} />
          <PrivateRoute exact path='/transfers' component={Transfers} />
          <PrivateRoute exact path='/messages' component={Messages} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Navbottom />
      </Router>
    </Provider>
  );
}

export default App;
