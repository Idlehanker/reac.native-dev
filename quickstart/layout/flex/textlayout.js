import React, {Component} from 'react';
import {View, Text,TouchableOpacity,TextInput} from 'react-native';

class TextLayout extends Component {
    render() {
        return (
            <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={{
                    width: 120,
                    height: 45,
                    backgroundColor: 'steelblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 7,
                }}>
                    <Text
                        style={{
                        height: 20,
                        width: 100,
                        fontSize: 18,
                        alignContent: 'center',
                        alignSelf: 'center',
                        textAlignVertical: 'bottom',
                        textDecorationStyle: 'double',
                        textAlign: 'center',
                    }}>ABDF</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default TextLayout;