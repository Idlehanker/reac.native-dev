import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const styes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default class ForgotPwdPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    I am Forgotten password page.
                </Text>
            </View>
        )
    }
}