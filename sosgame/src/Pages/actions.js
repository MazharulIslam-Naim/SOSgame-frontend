import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

class Actions extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.props.nextPage({
      view: "Result"
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
      >
        <Typography className={classes.header} >
          Take action.
        </Typography>

        <Typography className={classes.body} >
          Select only the tasks that will help you to get prepared for
        </Typography>

        <Typography className={classes.disaster} >
          <u>a hurricane.</u>
        </Typography>

        <Button
          className={classes.done}
          onClick={this.changeView}
        >
          Done <KeyboardArrowRight />
        </Button>

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
  disaster: {
    fontSize: '20px',
    fontWeight: 'bold',
    text: 'center'
  },
  done: {
    marginRight: '5px',
    marginTop: '7px',
    backgroundColor: '#d347f0',
    color: 'white',
    '&:hover': {
      backgroundColor: '#ab24c7',
    }
  }
});

export default withStyles(styles)(Actions);
