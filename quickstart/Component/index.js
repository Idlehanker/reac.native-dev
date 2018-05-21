// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('Component', () => App);
/**
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens, registerScreenVisibilityListener } from './screens';

registerScreens(); // this is where you register all of your app's screens
registerScreenVisibilityListener();

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'hker.SectionList', // this is a registered name for a screen
      icon: require('./img/one.png'),
      selectedIcon: require('./img/one_selected.png'), // iOS only
      title: 'SectionList'
    },
    {
      label: 'Two',
      screen: 'hker.BasicList',
      icon: require('./img/three.png'),
      selectedIcon: require('./img/three_selected.png'), // iOS only
      title: 'BasicList'
    }
  ]
});
