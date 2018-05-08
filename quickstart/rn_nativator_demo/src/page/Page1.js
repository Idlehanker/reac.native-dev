import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default class Page1 extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Screen One',
        drawerIcon: () => ( < Image source = {{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
        style = {{width: 30, height: 30, borderRadius: 15}}/>
    )
    }


    render(){
        return(
            <View style={styles.container}>
                <Text>Page one</Text> 
            </View>
            )
    }
}