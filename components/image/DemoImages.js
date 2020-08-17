import React, {Component} from 'react'
import {Image, View} from 'react-native'


class DemoImages extends Component{

    render(){
        return(
            <View>
                <Image source={require('./react-native.png')}/>
                <Image source={{uri:'https://www.codeplusinfo.com/wp-content/uploads/2020/02/react-native-logo-e1581157043920.png'}}
                    style={{width:100, height:100}}
                />
            </View>
        )
    }
}

export default DemoImages

