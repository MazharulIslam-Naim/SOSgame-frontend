import React, { Component } from 'react';
import Start from './Pages/start.js';
import Story from './Pages/story.js';
import Disaster from './Pages/disaster.js';
import Gathering from './Pages/gathering.js';
import Actions from './Pages/actions.js';
import RunDisaster from './Pages/runDisaster.js';
import Result from './Pages/result.js';

//import backgroundPaper from './Images/notebook-paper-background.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Start'

    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(state) {
    this.setState(state);
  }

  render() {
    switch (this.state.view) {
      default:
        return (
          <Start
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        );
      case 'Story':
        return (
          <Story
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        );
      case 'Disaster':
        return (
          <Disaster
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        );
      case 'Gathering':
        return (
          <Gathering
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        );
      case 'Actions':
        return (
          <Actions
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        );
      case 'Result':
        return (
          <Result
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        );
      case 'Loading':
        return (
          <RunDisaster
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        );
    }
  }
}

export default App;
