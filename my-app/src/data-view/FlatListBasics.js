import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'

export default class FlatListBasics extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                    {
                        key: 'Devin'
                    }, {
                        key: 'Jakson'
                    }, {
                        key: 'James'
                    }, {
                        key: 'Joel'
                    }, {
                        key: 'John'
                    }, {
                        key: 'Jillian'
                    }, {
                        key: 'Jimmy'
                    }, {
                        key: 'Julie'
                    }
                ]}
                    renderItem=
                    {({item})=><Text style={styles.item}>{item.key}</Text>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'skyblue',
        fontStyle: 'normal'
    }
})