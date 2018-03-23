import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linky: {
        fontWeight: 'bold',
        color: '#4C3E54',
        paddingTop: 10
    }
})

export default class SigninPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    I am signin page</Text>
                <Text
                    style={styles.linky}
                    onPress={() => this.props.navigation.navigate('signupPage')}>
                    Signup</Text>
                <Text
                    style={styles.linky}
                    onPress={() => this.props.navigation.navigate('forgotPwdPage')}>
                    Forgot Password</Text>
                <Text
                    style={styles.linky}
                    onPress={() => this.props.naviagtion.navigate('drawStack')}>Preteend we Loged in</Text>
            </View>
        )
    }
}