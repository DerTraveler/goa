import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { isSignedIn } from './authentication';
import routes from '../routes';

interface LoginState {
  signedIn: undefined | boolean;
}

class LoginGuard extends React.Component<{ children: React.ReactNode }, LoginState> {
  state = {
    signedIn: undefined,
  };

  async componentDidMount() {
    this.setState({ signedIn: await isSignedIn() });
  }

  render() {
    const { children } = this.props;
    const { signedIn } = this.state;

    if (signedIn) {
      return children;
    }
    if (signedIn === undefined) {
      return null;
    }
    return <Redirect to={routes.SIGN_IN} />;
  }
}

const renderNothing = () => null;

const AuthenticatedRoute = (props: RouteProps) => {
  const { render: originalRender, ...routeProps } = props;
  const render = originalRender || renderNothing;

  return (
    <Route render={renderProps => <LoginGuard>{render(renderProps)}</LoginGuard>} {...routeProps} />
  );
};

export default AuthenticatedRoute;
