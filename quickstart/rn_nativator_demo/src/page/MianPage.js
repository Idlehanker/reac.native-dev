import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {NaviagtionActions} from 'react-navigation'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingTop: 40,
        paddingHorizontal: 20
    },

    uglyDrawerItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E73536',
        padding: 15,
        margin: 5,
        borderRadius: 2,
        borderColor: '#E73536',
        borderWidth: 1,
        textAlign: 'center'
    }
})

export default class MainPage extends React.Component {
    render() {

        const {navigation} = this.props

        return (
            <View style={styles.container}>
                <Text
                    onPress={() => navigation.navigate('page1')}
                    style={styles.uglyDrawerItem}>
                    Page one
                </Text>
                <Text
                    onPress={() => navigatoin.navigate('page2')}
                    style={styles.uglyDrawerItem}>
                    Page two
                </Text>
                <Text
                    onPress={() => navigation.navigate('page3')}
                    style={styles.uglyDrawerItem}>
                    Page Thress
                </Text>
                <Text onPress={this.logout} style={styles.uglyDarwerItem}>Logout</Text>
            </View>
        )
    }

    logout = () => {

        const actionToDispatch = NaviagtionActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: 'loginStack'})]
        })

        this
            .props
            .navigation
            .dispath(actionToDispatch)
    }
}