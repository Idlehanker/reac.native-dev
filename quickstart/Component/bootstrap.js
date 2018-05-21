/**
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens, registerScreenVisibilityListener } from './screens';
import {Platform} from 'react-native';

registerScreens(); // this is where you register all of your app's screens
registerScreenVisibilityListener();

const tabs = [
    {
      label: 'One',
      screen: 'Section', // this is a registered name for a screen
      icon: require('./img/one.png'),
      selectedIcon: require('./img/one_selected.png'), // iOS only
      title: 'SectionList'
    },
    {
      label: 'Two',
      screen: 'Basic',
      icon: require('./img/three.png'),
      selectedIcon: require('./img/three_selected.png'), // iOS only
      title: 'BasicList'
    }
  ];


// this will start our app
Navigation.startTabBasedApp({
    tabs,
    animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
    tabsStyle: {
      tabBarBackgroundColor: '#003a66',
      tabBarButtonColor: '#ffffff',
      tabBarSelectedButtonColor: '#ff505c',
      tabFontFamily: 'BioRhyme-Bold',
    },
    appStyle: {
      tabBarBackgroundColor: '#003a66',
      navBarButtonColor: '#ffffff',
      tabBarButtonColor: '#ffffff',
      navBarTextColor: '#ffffff',
      tabBarSelectedButtonColor: '#ff505c',
      navigationBarColor: '#003a66',
      navBarBackgroundColor: '#003a66',
      statusBarColor: '#002b4c',
      tabFontFamily: 'BioRhyme-Bold',
    },
    // drawer: {
    //   left: {
    //     screen: 'example.Types.Drawer'
    //   }
    // }
  });
