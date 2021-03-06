import React, {Component} from 'react';
import {View} from 'react-native';

class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column'
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

export default FlexDirectionBasics;