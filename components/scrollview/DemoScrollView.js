import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'


class DemoScrollView extends Component{
    constructor() {
        super();
        this.state = {
            svnames : [
                {'name': 'Ben', 'id': 1},
                {'name': 'Susan', 'id': 2},
                {'name': 'Robert', 'id': 3},
                {'name': 'Mary', 'id': 4},
            ]
        }
    }

    render(){
        return(
            <View>
                <ScrollView>
                    {
                        this.state.svnames.map((item,index) => (
                            <View key={item.id} style = {styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }

                </ScrollView>
            </View>

        )
    }


}


const styles = StyleSheet.create({
    item : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})

export default DemoScrollView