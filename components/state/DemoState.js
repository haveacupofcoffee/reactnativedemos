import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


class DemoState extends React.Component {

    constructor(){
        super();
        this.state = {
           myState : "Hello World!!"
        }

    }

    updateState = () => this.setState({myState:"Hello React Native!"})



   render(){
        return(
            <View>
                <Text onPress = {this.updateState}>{this.state.myState}</Text>
            </View>
        );
   }

}


export default DemoState