import React, {Component} from 'react'
import {View, Text} from 'react-native'



class DemoHttpFetch extends Component{
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({data: responseJson})
        })
        .catch((error) => {
            console.error(error)
        })
    }


    render() {
        return(
            <View>
                <Text>{'https://jsonplaceholder.typicode.com/todos/1\n'}</Text>
                <Text>{this.state.data.title}</Text>
            </View>
        )
    }
}


export default DemoHttpFetch