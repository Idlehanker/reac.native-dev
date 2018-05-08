import React from 'react'
import {View, Alert, Button, StyleSheet} from 'react-native'

export default class ButtonBasics extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={this.__onPressButton} title='Press Me'/>

                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this.__onPressButton} title='Press Me' color='#841584'/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this.__onPressButton} title='This looks great!'/>
                    <Button onPress={this.__onPressButton} title='OK' color='#841584'/>
                </View>
            </View>
        )
    }

    __onPressButton() {
        Alert.alert('You tapped the button!')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    buttonContainer: {
        margin: 20
    },

    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})