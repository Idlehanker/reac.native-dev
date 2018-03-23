import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export default class DetailsPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the details page</Text>
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