import React from 'react'
import {Text, View} from 'react-native'

class Greeting extends React.Component {
    render() {

        return (
            <Text>Hello {this.props.name}
                !</Text>
        )
    }
}

export default class LotsOfGreetings extends React.Component {
    render() {
        return (
            <View style={{
                alignItems: 'center'
            }}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        )
    }
}