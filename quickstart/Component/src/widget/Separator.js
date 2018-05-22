/**
 * @flow
 */
import React, { Component } from 'react'
import { Text, View, Dimensions, PixelRatio, StyleSheet } from 'react-native'

type Props = {}

const {width} = Dimensions.get('window');
const _pixel = 1/PixelRatio.get();

export default class Separator extends Component<Props> {

  render() {
    return (
      <View style={styles.pixel}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pixel: {
        width: width,
        height: _pixel,
        backgroundColor: 'lightgray', 
    }
})