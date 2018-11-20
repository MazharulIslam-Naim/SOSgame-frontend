import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import thumbsUp from '../Images/thumbs_up_pass.png';
import thumbsDown from '../Images/thumbs_down_fail.png';
import resultSwim from '../Images/result-swim.png';
import resultSink from '../Images/result-sink.png';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: 'Pas'

    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {
          this.state.success === 'Pass'
          ?
            (
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Paper className={classes.pass} >
                </Paper>
                <Paper className={classes.headerImageCircle} >
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <img src={thumbsUp} alt="Thumbs Up" className={classes.headerImage} />
                  </Grid>
                </Paper>
                <img src={resultSwim} alt="Swim!"  />
                <Typography className={classes.bBody} >
                  Congrats!
                </Typography>
                <Typography className={classes.body} >
                  You were pretty well prepared, and {} are grateful for your diligence! Here's your scores:
                </Typography>
                <Divider className={classes.divider} />
              </Grid>
            )
          :
            (
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Paper className={classes.fail} >
                </Paper>
                <Paper className={classes.headerImageCircle} >
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <img src={thumbsDown} alt="Thumbs Down" className={classes.headerImage} />
                  </Grid>
                </Paper>
                <img src={resultSink} alt="Sink!"  />
                <Typography className={classes.bBody} >
                  Oh No!
                </Typography>
                <Typography className={classes.body} >
                  Oh No! {} didn't make it. Take a look at where you went wrong and try again.
                </Typography>
                <Divider className={classes.divider} />
              </Grid>
            )
        }
        <Button className={classes.playAgain} >
          PLAY AGAIN <KeyboardArrowRight />
        </Button>

      </Grid>
    );
  }
}

const styles = () => ({
  pass: {
    backgroundColor: 'green',
    width: '100%',
    height: '50px',
    borderRadius: '0px',
    position: 'absolute',
    top: '0%',
    left: '0%',
    zIndex: '-1'
  },
  fail: {
    backgroundColor: 'red',
    width: '100%',
    height: '50px',
    borderRadius: '0px',
    position: 'absolute',
    top: '0%',
    left: '0%',
    zIndex: '-1'
  },
  headerImageCircle: {
    borderRadius: '50px',
    boxShadow: 'none',
    width: '90px',
    height: '90px'
  },
  headerImage: {
    marginTop: '8px'
  },
  body: {
    fontSize: '20px',
    textAlign: 'center'
  },
  bBody: {
    fontSize: '20px',
    fontWeight: 'bold',
    text: 'center'
  },
  divider: {
    width: '80%',
    height: '2px',
    backgroundColor: 'black'
  },
  playAgain: {
    marginRight: '5px',
    marginTop: '7px',
    backgroundColor: '#d347f0',
    color: 'white',
    '&:hover': {
      backgroundColor: '#ab24c7',
    }
  }
});

export default withStyles(styles)(Result);
