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

const SignIn = ({ onLogin }: Props) => (
  <CenteredContent>
    <Card>
      <CardContent>
        <LoginForm onSubmit={onLogin} />
      </CardContent>
    </Card>
  </CenteredContent>
);

export default withStyles(styles)(SignIn);
