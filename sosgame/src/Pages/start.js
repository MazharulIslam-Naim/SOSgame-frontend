import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import unlucky from '../Images/ifeelunlucky_btn.png';
import header from '../Images/SOS-title-graphic.png';

import BackgroundPaper from '../Images/notebook-paper-background.png';

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.props.nextPage({
      view: "Story"
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wholePage}
      >
        <Typography className={classes.headerMess}>Disaster can strike at any time. Are you ready? Lets play...</Typography>
        <img src={header} alt="Header" className={classes.header} />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Button
            id="ifeelunlucky"
            type="button"
            className={classes.buttons}
            onClick={this.changeView}
          >
            <img
              src={unlucky}
              alt="I FEEL UNLUCKY"
              className={classes.buttonsI}
            />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const styles = () => ({
  wholePage: {
    backgroundImage: `url(${BackgroundPaper})`,
    width: '100%',
    height: '100%',
    left: '0%',
    right: '0%'
  },
  headerMess: {
    marginTop: '40px',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  buttons: {
    marginTop: '40px',
    height: '30%',
    width: '20%'
  },
  buttonsI: {
    height: '100%',
    width: '100%'
  },
  header: {
    marginTop: '100px',
    height: '30%',
    width: '30%'
  }

});

export default withStyles(styles)(Start);
