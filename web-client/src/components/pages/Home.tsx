import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {};

export type LogOutMethod = () => Promise<any>;

interface Props {
  onLogout: LogOutMethod;
}

const Home = (props: Props) => <Button onClick={props.onLogout}>Logout</Button>;

export default withStyles(styles)(Home);
