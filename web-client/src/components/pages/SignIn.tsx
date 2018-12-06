import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CenteredContent from '../templates/CenteredContent';
import LoginForm, { LoginMethod } from '../organisms/LoginForm';

const styles = {};

interface Props {
  onLogin: LoginMethod;
}

const SignIn = ({ onLogin }: Props) => (
  <CenteredContent>
    <Card>
      <CardContent>
        <LoginForm onLogin={onLogin} />
      </CardContent>
    </Card>
  </CenteredContent>
);

export default withStyles(styles)(SignIn);
