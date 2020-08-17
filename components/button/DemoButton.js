import React, {Component} from 'react'
import {View, Button, TouchableOpacity, StyleSheet, Text, TouchableHighlight,TouchableNativeFeedback} from 'react-native'


class DemoButton extends Component{

    handlePress = () => false

    render() {
        return(
            <View>
                <Button
                    onPress = {this.handlePress}
                    title = 'Red Button'
                    color = 'red'
                />

                <View style={styles.container}>
                    <TouchableOpacity>
                        <Text style={styles.text}>
                            TouchableOpacity
                        </Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.container}>
                    <TouchableHighlight>
                        <Text style={styles.text}>
                            TouchableHighlight
                        </Text>

                    </TouchableHighlight>

                </View>

                <View style = {styles.container}>
                    <TouchableNativeFeedback>
                        <Text style = {styles.text}>
                            TouchableNativeFeedback
                        </Text>
                    </TouchableNativeFeedback>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})

export default DemoButton