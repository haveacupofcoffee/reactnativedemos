import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './Home';
import About from './About';

class DemoRouter extends Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key="home" component={Home} title="Home" init={true} />
          <Scene key="about" component={About} title="About" />
        </Scene>
      </Router>
    );
  }
}

export default DemoRouter;
