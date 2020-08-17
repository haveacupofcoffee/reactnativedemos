import React, {Component} from 'react'
import {View} from 'react-native'

import PresentationalComponent from './DemoPresentationalComponent'



class ContainerComponent extends Component {
    constructor() {
        super();

        this.state = {
            myState : "Hello World!!"
        }
    }

    updateState = () => this.setState({myState: "Hello React Native with Props"})


    render(){
        return(
            <View>
                <PresentationalComponent myState={this.state.myState} updateState={this.updateState}/>

            </View>

        );
    }
}

export default ContainerComponent