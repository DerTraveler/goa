import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import _ from 'lodash';

export type LoginInfo = { user: string; password: string };

interface Props {
  userError?: string;
  passwordError?: string;
  onSubmit: (info: LoginInfo) => any;
}

type State = LoginInfo;

class LoginForm extends React.Component<Props, State> {
  state: State = {
    user: '',
    password: '',
  };

  handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: event.target.value } as Pick<State, keyof State>);
  };

  handleLogin = () => {
    const { onSubmit } = this.props;
    onSubmit(_.pick(this.state, ['user', 'password']));
  };

  render = () => {
    const { user, password } = this.state;
    const { userError = '', passwordError = '' } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!!userError}
            label="User"
            value={user}
            helperText={userError}
            onChange={this.handleChange('user')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!!passwordError}
            type="password"
            label="Password"
            value={password}
            helperText={passwordError}
            onChange={this.handleChange('password')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={this.handleLogin} disabled={!user || !password}>
            Login
          </Button>
        </Grid>
      </Grid>
    );
  };
}

export default LoginForm;
