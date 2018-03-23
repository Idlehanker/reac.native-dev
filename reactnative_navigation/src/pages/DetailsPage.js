import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export default class DetailsPage extends React.Component {

    // static navigationOptions = {     title: 'Details' }
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state
        return {
            title: params
                ? params.otherParam
                : 'A Nested Details Screen'
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