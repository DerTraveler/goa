import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BaseTemplate from './BaseTemplate';

const styles = {
  root: {
    'min-height': '100vh',
  },
};

const CenteredContent = ({ children, width, classes }) => (
  <BaseTemplate>
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={width}>
        {children}
      </Grid>
    </Grid>
  </BaseTemplate>
);

CenteredContent.propTypes = {
  width: PropTypes.number,
};

CenteredContent.defaultProps = {
  width: 4,
};

export default withStyles(styles)(CenteredContent);
