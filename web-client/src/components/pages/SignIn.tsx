import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CenteredContent from '../templates/CenteredContent';
import LoginForm, { LoginInfo as LoginInfoType } from '../organisms/LoginForm';

const styles = {};

type LoginInfo = LoginInfoType;

export interface LoginSuccess {
  success: true;
  userInfo: string;
}
export interface LoginError {
  success: false;
  userError?: string;
  passwordError?: string;
}

export type LogInMethod = (info: LoginInfo) => Promise<LoginSuccess | LoginError>;

interface Props {
  onLogin: LogInMethod;
}

interface State {
  userError: string;
  passwordError: string;
}

class SignIn extends React.Component<Props, State> {
  state = {
    userError: '',
    passwordError: '',
  };

  handleLogin = async (info: LoginInfo) => {
    const { onLogin } = this.props;
    const userInfo = await onLogin(info);
    if (userInfo.success) {
    } else {
      this.setState({
        userError: userInfo.userError || '',
        passwordError: userInfo.passwordError || '',
      });
    }
  };

  render() {
    return (
      <CenteredContent>
        <Card>
          <CardContent>
            <LoginForm onSubmit={this.handleLogin} {...this.state} />
          </CardContent>
        </Card>
      </CenteredContent>
    );
  }
}

export default withStyles(styles)(SignIn);
