/**
 * @flow
 */
import React, {Component} from 'react'
import {Text, View, Button, Alert, StyleSheet} from 'react-native'

import DefaultButton from './button/DefaultButton';
import ColorButton from './button/DefaultButton';

export default class BasicButtons extends Component < {} > {

  _basicOnPress = (e) => {
    Alert.alert("basic onpressed!");
  }

  _colorOnPress = () => {
    Alert.alert("color button onpressed!");
  }

  render() {
    const basicButton = {
      title: 'Basic Button',
      onPress: this._basicOnPress
    }

    const colorButton = {
      title: 'Color Button',
      color: 'red',
      onPress: this._colorOnPress
    }

    return (
      <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <DefaultButton
          title={basicButton.title}
          onPress={basicButton.onPress}
          style={styles.button}/>
        <ColorButton
          title={colorButton.title}
          color={colorButton.color}
          onPress={colorButton.onPress}
          style={styles.button}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 44,
    margin: 7,
    backgroundColor: 'lightgray'
  }
})
