import React from 'react'
import {View, Text} from 'react-native'

class Blink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowingText: true
        }

        setInterval(() => {
            this.setState(preState => {
                return {isShowingtext: !preState.isShowingtext}
            });
        }, 1000);
    }

    render() {
        const display = this.state.isShowingtext
            ? this.props.text
            : ''
        return (
            <Text>{display}</Text>
        )
    }
}

export default class BlinkApp extends React.Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        )
    }
}