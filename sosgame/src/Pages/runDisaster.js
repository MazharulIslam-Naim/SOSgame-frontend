import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../Images/1f300.png';
import headerImage from '../Images/loading.png';
import { withStyles } from '@material-ui/core/styles';

import './rundisaster.css';

class RunDisaster extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <img src={headerImage} alt="Header" className={classes.header} />
        <img src={logo} className="App-logo" alt="logo" />

      </Grid>
    );
  }
}

const styles = () => ({
  header: {
    marginTop: '80px',
    marginBottom: '80px'
  }
});

export default withStyles(styles)(RunDisaster);
