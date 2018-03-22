import React from 'react'
import {View} from 'react-native'

export default class FlexDimensionsBasics extends React.Component
{
    render() {
        return (
            <View style={{
                // flex: 1
                width: 320,
                height: 300,
            }}>
                <View
                    style={{
                    flex: 1,
                    backgroundColor: 'powderblue'
                }}/>
                <View
                    style={{
                    flex: 2,
                    backgroundColor: 'skyblue'
                }}/>
                <View
                    style={{
                    flex: 3,
                    backgroundColor: 'steelblue'
                }}/>
            </View>
        )
    }
}