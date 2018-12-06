import React from 'react';
import Grid, { GridSize } from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BaseTemplate from './BaseTemplate';

const styles = {
  root: {
    'min-height': '100vh',
  },
};

interface Props {
  children: React.ReactNode;
  width?: GridSize;
  classes: {
    root: string;
  };
}

const CenteredContent = ({ children, width = 4, classes }: Props) => (
  <BaseTemplate>
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={width}>
        {children}
      </Grid>
    </Grid>
  </BaseTemplate>
);

export default withStyles(styles)(CenteredContent);
