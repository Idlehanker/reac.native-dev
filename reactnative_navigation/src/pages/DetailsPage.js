import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export default class DetailsPage extends React.Component {

    /*version 1.0
    static navigationOptions = {     title: 'Details' }
    */
    /*version 2.0
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state
        return {
            title: params
                ? params.otherParam
                : 'A Nested Details Screen'
        }
    }
    */

    //version 3.0
    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state
        return {
            title: params
                ? params.otherParam
                : 'A Nested Details Screen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        }
    }

    render() {
        const {params} = this.props.navigation.state
        const itemId = params
            ? params.itemId
            : null
        const otherParam = params
            ? params.otherParam
            : null

        return (
            <View style={styles.container}>

                <Text>This is the details page</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>

                <Button
                    title="Go to Details"
                    onPress={() => {
                    this
                        .props
                        .navigation
                        .navigate('Details')
                }}/>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}/>

                <Button
                    title="Go back"
                    onPress={() => {
                    this
                        .props
                        .navigation
                        .goBack()
                }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f',
        alignItems: 'center',
        justifyContent: 'center'
    }
})