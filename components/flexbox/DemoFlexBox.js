import React from 'react'
import {View, StyleSheet} from 'react-native'


const DemoFlexBox = () => {

    return(
        <View style = {styles.container}>
            <View style = {styles.redbox}></View>
            <View style = {styles.blackbox}></View>
            <View style = {styles.greenbox}></View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 600
    },

    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },

    blackbox: {
        width: 100,
        height:100,
        backgroundColor: 'black'
    },

    greenbox: {
        width: 100,
        height: 100,
        backgroundColor: 'green'

    }

})

export default DemoFlexBox