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
  statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'learning.Basic',
		title: 'Basic',
		navigatorStyle,
		leftButtons: [
			{
				id: 'sideMenu'
			}
		]
  },
  drawer:{
    left:{
      screen: 'learning.Drawer'
    }
  }
});

