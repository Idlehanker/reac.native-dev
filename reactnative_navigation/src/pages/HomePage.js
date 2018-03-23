import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {StackNavigator} from 'react-navigation'

export default class HomePage extends React.Component {

    static navigationOptions = {
        title: 'Home'
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    This is Home Page</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details', {
                    itemId: 88,
                    otherParam: 'Anything you want here.'
                })}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe',
        alignItems: 'center',
        justifyContent: 'center'
    }
})