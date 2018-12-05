import React from 'react';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ palette }) => ({
  root: {
    '& .PhotoHeader': {
      display: 'none',
    },
    '&:hover': {
      '& .PhotoHeader': {
        display: 'flex',
      },
    },
  },
  icon: {
    color: palette.common.white,
  },
});

const Photo = ({ classes, photo }) => (
  <GridListTile className={classes.root}>
    <img src={photo.thumbnail} alt="" />
    <GridListTileBar
      titlePosition="top"
      actionIcon={
        <IconButton className={classes.icon}>
          <MoreVertIcon />
        </IconButton>
      }
      className="PhotoHeader"
    />
  </GridListTile>
);

Photo.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  photo: PropTypes.string.isRequired,
};

export default withStyles(styles)(Photo);
