import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CenteredContent from '../templates/CenteredContent';
import LoginForm, { LoginInfo } from '../organisms/LoginForm';

const styles = {};

interface Props {
  onLogin: (info: LoginInfo) => Promise<any>;
}

class SignIn extends React.Component<Props> {
  handleLogin = async (info: LoginInfo) => {
    const { onLogin } = this.props;
    try {
      const userInfo = await onLogin(info);
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <CenteredContent>
        <Card>
          <CardContent>
            <LoginForm onSubmit={this.handleLogin} />
          </CardContent>
        </Card>
      </CenteredContent>
    );
  }
}

export default withStyles(styles)(SignIn);
