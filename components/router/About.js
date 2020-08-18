import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

class About extends Component {
  goToHome = () => {
    Actions.home();
  };

  render() {
    return (
          <TouchableOpacity stlye={{margin: 10}} onPress={this.goToHome}>
            <Text>This is About!</Text>
          </TouchableOpacity>

    );
  }
}

export default About;
