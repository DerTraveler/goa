import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import { signIn, signOut } from './lib/authentication';
import AuthenticatedRoute from './lib/AuthenticatedRoute';

import routes from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.SIGN_IN} render={() => <SignIn onLogin={signIn} />} />
      <AuthenticatedRoute path={routes.HOME} render={() => <Home onLogout={signOut} />} />
      <Route render={() => <Redirect to={routes.HOME} />} />
    </Switch>
  </BrowserRouter>
);

export default App;
