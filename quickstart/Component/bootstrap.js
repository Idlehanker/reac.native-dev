/**
 * @flow
 */
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import {Platform} from 'react-native';
// import { deepEqual } from 'assert';

registerScreens(); // this is where you register all of your app's screens
// registerScreenVisibilityListener();

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'steelblue',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};
type Props = {
}
// this will start our app
class App extends React.Component<Props>{
  constructor(props: Props){
    super(props);
    {
      this.startApp();
    }
  }
  startApp(){

    Navigation.startTabBasedApp({
      tabs : [
      {
        label: 'Basic',
        screen: 'learning.Basic', // this is a registered name for a screen
        icon: require('./img/one.png'),
        selectedIcon: require('./img/one_selected.png'), // iOS only
        title: 'BasicList'
      },
      {
        label: 'Complex',
        screen: 'learning.Section',
        icon: require('./img/three.png'),
        selectedIcon: require('./img/three_selected.png'), // iOS only
        title: 'SectionList'
      }
    ],
    tabsStyle: {
      tabBarButtonColor: 'white',
      tabBarSelectedButtonColor: 'white',
      tabBarBackgroundColor: 'black'
    },
    appStyle: {
      tabBarBackgroundColor: '#003a66',
      navBarButtonColor: '#ffffff',
      tabBarButtonColor: '#ffffff',
      navBarTextColor: '#ffffff',
      tabBarSelectedButtonColor: '#ff505c',
      navigationBarColor: '#003a66',
      navBarBackgroundColor: 'steelblue',
      statusBarColor: '#002b4c',
      tabFontFamily: 'BioRhyme-Bold',
    },
  });

  /*
  startApp(){
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
    */
  }
}

export default App;

