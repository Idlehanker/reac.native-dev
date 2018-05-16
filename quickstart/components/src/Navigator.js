import BackAndroid from 'BackAndroid';
import {Navigator} from "react-native-deprecated-custom-components";
import Platform from "Platform";
import React from 'react';

const _Navigator = {

  _handlers: ([] : Array < () => boolean >),
  componentDidMount = () => {
    BackAndroid.addEventListener("hardwareBackPress", this.handleBackButton);
  },

  componentWillUnmount = () => {
    BackAndroid.removeEventListener("hardwareBackPress", this.handleBackButton);
  },

  getChildContext = () => {
    return {addBackButtonListener: this.addBackButtonListener, removeBackButtonListener: this.removeBackButtonListener};
  },

  addBackButtonListener = (listener) => {
    this._handler.push(listener);
  },

  removeBackButtonListener = (listener) => {
    this._handler = this._handler.filter(handler => handler !== listener);
  },

  handleBackButton = () => {
    for (let i = this._handler.length - 1; i >= 0; i--) {
      if (this._handler[i]()) {
        return true;
      }
    }

    const navigator = this._navigator;
    if (navigator && navigator.getCurrentRouters().length > 1) {
      navigator.pop();
      return true;
    }

    if (this.props.tab != "schedule") {
      this.props.dispatch(switchTab("schedule"));
      return true;
    }
    return false;
  },

  render = () => {
    return (<Navigator ref { c => (this._navigator = c)} style={styles.container} configureScene={ route => {
        if (Platform.OS === "android") {
          return Navigator.SceneConfig.FloatFromBottomAndroid;
        }
        if (route.shareSettings || route.friend || route.webview || route.video || route.session || route.allSession || route.allDemos) {
          return Navigator.SceneConfig.PushFromRight;
        } else {
          return Navigator.SceneConfig.FloatFromBottom;
        }
      }} initialRoute={{}} renderScene={this.renderScene}/>);
  },

  renderScene = (route, navigator) => {
    if (route.webview) {
      return <WebView {...route} url={route.webview} navigator={navigator}/>;
    }
  }
};

const HKNavigator = React.createClass(_Navigator);

HKNavigator.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: F8Colors.bianca
  }
});

module.exports = {
  HKNavigator
}
