import React from 'react'
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View
} from 'react-native'

export default class Touchables extends React.Component {
    __onPressButton() {
        Alert.alert('You touched the button!')
    }

    __onLongPressButton() {
        Alert.alert('You long-pressed button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.__onPressButton} underlayColor='white'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.__onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={this.__onPressButton}
                    background={Platform.OS == 'android'
                    ? TouchableNativeFeedback.SelectableBackground()
                    : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback onPress={this.__onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableHighlight
                    onPress={this.__onPressButton}
                    onLongPress={this.__onLongPressButton}
                    underlayColor='white'>
                    <View style={this.button}>
                        <Text style={this.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})