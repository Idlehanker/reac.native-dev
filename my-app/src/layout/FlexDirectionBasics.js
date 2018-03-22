import React from 'react'
import {View} from 'react-native'

export default class FlexDirectionBasics extends React.Component {
    render() {
        return (
            <View
                style={{
                // width: 320,
                // height: 300,
                flex: 1,
                // flexDirection: 'column',
                flexDirection: 'row'
            }}>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'powderblue'
                }}/>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'skyblue'
                }}/>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'steelblue'
                }}/>
            </View>
        )
    }
}