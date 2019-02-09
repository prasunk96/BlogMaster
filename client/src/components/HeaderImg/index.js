import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: "100%",
    background: "linear-gradient(to right, #4568DC, #B06AB3)",
    height: 100,
    margin: '20px 20px 0px 20px',
  },
  headingStyle: {
    color: '#FFF'
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
        <Typography variant="h1" component="h1" className={classes.headingStyle}>
          Section Heading
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
