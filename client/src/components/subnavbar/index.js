import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const theme = createMuiTheme({
  palette: {
    primary: { main: "rgba(106, 0, 168, 0.9)" }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  bgColor: {
    background: 'white',
  },
  bgGrad: {
    background: "linear-gradient(to right, #4568DC, #B06AB3)"
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.bgColor}>
          <MuiThemeProvider theme={theme}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Lifestyle" />
              <Tab label="Technology" />
              <Tab label="Literature" />
              <Tab label="Entertainment" />
              <Tab label="Research" />
              <Tab label="Medical" />
              <Tab label="Fitness" />
              <Tab label="Programming" />
              <Tab label="Arts" />
              <Tab label="Media" />
            </Tabs>
          </MuiThemeProvider>
        </AppBar>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
