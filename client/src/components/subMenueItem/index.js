import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  card: {
    maxWidth: "inherit",
    margin: 10,
    boxShadow: '2px 2px 10px -2px rgba(0,0,0,0.75)'
  },
  media: {
    height: 0,
    paddingTop: '25%',
    position: 'relative'
  },
  actions: {
      background: 'white'
  },
});

class RecipeReviewCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image={this.props.imgSrc}
            title="Contemplative Reptile"
        >
        </CardMedia>
    </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
