import Navigator from './Navigator';
import {View} from 'react-native';
import React, {Component} from 'React';

calss HKApp extends Component {
  render() {
    return (<View style={{
        flex: 1
      }}>
      <Navigator/>
    </View>)
  }
}
