import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '100%',
  },
};

const CenteredContent = ({ content, width, classes }) => (
  <Grid container justify="center" alignItems="center" className={classes.root}>
    <Grid item xs={width}>
      {content}
    </Grid>
  </Grid>
);

CenteredContent.propTypes = {
  content: PropTypes.node.isRequired,
  width: PropTypes.number,
};

CenteredContent.defaultProps = {
  width: 4,
};

export default withStyles(styles)(CenteredContent);
