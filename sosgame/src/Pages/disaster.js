import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import headerImage from '../Images/disaster-emoji-hurricane.png';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

class Disaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      disaster: '',
      distance: 'Near'

    };
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.props.nextPage({
      view: "Gathering"
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

        <Typography className={classes.header}>
          The Disaster:
        </Typography>

        <img src={headerImage} alt="Header" className={classes.headerI} />

        <Typography className={classes.body}>
          You live in
        </Typography>

        <Typography className={classes.sBody}>
          <u>Tampa, Florida and a catagory 4 hurricane</u>
        </Typography>

        <Typography className={classes.body}>
          is predicted in the next week.
        </Typography>

        {
          this.state.distance === 'Near'
          ?
            (
              <Typography className={classes.body}>
                The danger is close. Most people are leaving but no evacuation order has been issued yet. You can choose to stay or go-both have risks.
              </Typography>
            )
          :
            (
              <Typography className={classes.body}>
                You are in no immediate danger but the hazard is heading your way. Will you take this time to evacuate or stay put? Both have risks.
              </Typography>
            )
        }



        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
          spacing={24}
        >
          <Button
            className={classes.sOrL}
            onClick={this.changeView}
          >
            Stay <KeyboardArrowRight />
          </Button>
          <Button
            className={classes.sOrL}
            onClick={this.changeView}
          >
            Evacuate <KeyboardArrowRight />
          </Button>
        </Grid>

      </Grid>
    );
  }
};

const styles = () => ({
  header: {
    fontWeight: 'bold',
    fontSize: '24px'
  },
  headerI: {

  },
  sOrL: {
    marginRight: '5px',
    marginTop: '7px',
    backgroundColor: '#d347f0',
    color: 'white',
    '&:hover': {
      backgroundColor: '#ab24c7',
    }
  },
  sBody: {
    fontSize: '20px',
    fontWeight: 'bold',
    text: 'center'
  },
  body: {
    fontSize: '20px',
    textAlign: 'center'
  }
});

export default withStyles(styles)(Disaster);
