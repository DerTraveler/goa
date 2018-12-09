import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import { signIn } from './lib/authentication';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/sign_in" render={() => <SignIn onLogin={signIn} />} />
      <Route path="/" render={() => <Home />} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default App;
