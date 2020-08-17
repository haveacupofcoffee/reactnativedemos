import React,{Component} from 'react'
import {View} from 'react-native'

import PresentationalComponent from './DemoStyle'


class DemoStyleTest extends Component {

    constructor(){
        super();

        this.state = {
            myState : "Hello World!!!"
        }

    }

    updateState = () => this.setState({myState : "Hello React Native Style"})

    render() {
        return(
            <View>
                <PresentationalComponent myState={this.state.myState} updateState={this.updateState}/>
            </View>

        )
    }

}

export default DemoStyleTest