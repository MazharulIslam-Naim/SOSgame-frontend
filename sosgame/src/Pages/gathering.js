import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

class Gathering extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography className={classes.header} >
          Get prepared.
        </Typography>
        <Typography className={classes.body} >
        Select the items you'll need to collect in advance to be ready for the storm. You can only choose 15 items!
        </Typography>

        <Paper className={classes.footer} >
          <Typography className={classes.title} >
          Selected items:
          </Typography>
          <Button className={classes.done} >
            Done <KeyboardArrowRight />
          </Button>
        </Paper>
      </Grid>
    );
  }
}

const styles = () => ({
  header: {
    fontWeight: 'bold',
    fontSize: '24px'
  },
  body: {
    fontSize: '20px',
    textAlign: 'center'
  },
  footer: {
    backgroundColor: 'grey',
    position: 'absolute',
    width: '100%',
    height: '20%',
    borderRadius: '0px',
    bottom: '0%',
    left: '0%'
  },
  title: {
    fontWeight: 'bold',
    padding: '10px',
    fontSize: '20px'
  },
  done: {
    backgroundColor: '#d347f0',
    color: 'white',
    position: 'absolute',
    right: '5%',
    top : '10%',
    '&:hover': {
      backgroundColor: '#ab24c7',
    }
  }
});

export default withStyles(styles)(Gathering);
