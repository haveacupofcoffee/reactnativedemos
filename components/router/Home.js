import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  goToAbout = () => {
    Actions.about();
  };

  render() {
    return (
          <TouchableOpacity style={{margin: 10}} onPress={this.goToAbout}>
            <Text>This is Home!</Text>
          </TouchableOpacity>

    );
  }
}

export default Home;
