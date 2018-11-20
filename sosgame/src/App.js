import React, { Component } from 'react';
import Start from './Pages/start.js';
import Story from './Pages/story.js';
import Disaster from './Pages/disaster.js';
import Gathering from './Pages/gathering.js';
import Actions from './Pages/actions.js';
import RunDisaster from './Pages/runDisaster.js';
import Result from './Pages/result.js';

import backgroundPaper from './Images/notebook-paper-background.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Start'

    };
  }

  render() {
    return (
      <RunDisaster />
    );
  }
}

export default App;
