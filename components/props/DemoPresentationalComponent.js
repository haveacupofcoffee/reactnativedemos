import React from 'react'
import {View, Text} from 'react-native'


const PresentationalComponent = (props) => {

    return (
        <View>
            <Text onPress = {props.updateState}>
                {props.myState}
            </Text>
        </View>
    );
}

export default PresentationalComponent