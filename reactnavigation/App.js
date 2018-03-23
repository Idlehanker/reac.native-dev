import React from 'react'
import {StackNavigator} from 'react-navigation'

import HomePage from './src/pages/HomePage'
import DetailsPage from './src/pages/DetailsPage'

const RootStack = StackNavigator({
  Home: {
    screen: HomePage
  },
  Details: {
    screen: DetailsPage
  }
}, {initialRootName: 'Home'})

export default class App extends React.Component {
  render() {
    return <RootStack/>
  }
}
