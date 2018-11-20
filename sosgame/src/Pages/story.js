import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: {}

    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ start: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://s-o-s.fun/api/game/start');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
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
          Alert!
        </Typography>
        <Typography className={classes.body}>
          A disaster is coming! Help guide the people below by chooseing the best actions while building a list of items that best suits everyones needs.
        </Typography>
        {console.log(this.state.start.characters)}
        {/*{this.state.start.characters.map(([ id, type, carry, disabled, emoji ]) => {
          return (

            <Typography>
              {type}
            </Typography>
          )
        })}

          const i = 0
          while ( i <= this.state.start.characters.length ) {
            return  (
              <Typography>
                {this.state.start.characters[i]}
              </Typography>
            )
            i++
          }
          */}


        <Button className={classes.next}>
          Next <KeyboardArrowRight />
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
  next: {
    marginRight: '5px',
    marginTop: '7px',
    backgroundColor: '#d347f0',
    color: 'white',
    '&:hover': {
      backgroundColor: '#ab24c7',
    }
  },
});

export default withStyles(styles)(Story);
