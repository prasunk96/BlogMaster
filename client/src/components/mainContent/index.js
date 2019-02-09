import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../sidebar';
import PostContent from '../postContent';
import HeaderImg from '../HeaderImg';
const styles = theme => ({
  root: {
    flexGrow: 1,
    borderTop: '1px solid rgba(73, 10, 112, 0.2)'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderRadius: 0
  },
  borderStyle: {
    borderRight: '1px solid rgba(73, 10, 112, 0.2)',
    borderLeft: '1px solid rgba(73, 10, 112, 0.2)',
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper}><Sidebar /></Paper>
        </Grid>
        <Grid item xs={8} className={classes.borderStyle}>
          <HeaderImg className={classes.headerImg}/>
          <Paper className={classes.paper}><PostContent /></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Sidebar /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
