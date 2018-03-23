import React from 'react'
import {Text, Animated, Easing} from 'react-native'
import {StackNavigator, DrawerNavigator} from 'react-navigation'

import SigninPage from '../page/SigninPage'
import SignupPage from '../page/SignupPage'

import MainPage from '../page/MianPage'
import ForgotPwdPage from '../page/ForgotPwdPage'

import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'

const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
})

const DrawerStack = DrawerNavigator({
    page1: {
        screen: Page1
    },
    page2: {
        screen: Page2
    },
    page3: {
        screen: Page3
    }
}, {
    gesturesEnable: false,
    contentComponent: MainPage
})

const drawButton = navigation => (
    <Text
        style={{
        padding: 5,
        color: 'white'
    }}
        onPress={() => {
        if (navigation.state.index == 0) {
            navigation.navigate('DrawerOpen')
        } else {
            navigation.navigate('DrawerClose')
        }
    }}>Menu</Text>
)

const DrawerNavigation = StackNavigator({
    DrawerStack: {
        screen: DrawerStack
    }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#4C3E54'
        },
        title: 'Welcome!',
        headerTintEnabled: false,
        gestureEnable: false,
        headerLeft: ddrawerButton(navigation)
    })
})

const SigninStack = StackNavigator({
    signinPage: {
        screen: SigninPage
    },
    signupPage: {
        screen: SignupPage
    },
    forgotPwdPage: {
        screen: ForgotPwdPage,
        navigationOptions: {
            title: 'Forgot Password'
        }
    }
}, {
    headMode: 'float',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#E73536'
        },
        title: 'You are not signin',
        headerTintColor: 'white'
    }
})

const PrimaryNav = StackNavigator({
    signinStack: {
        screen: SigninPage
    },
    drawerStack: {
        screen: DrawerNavigation
    }
}, {
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'signinStack',
    transitionConfig: noTransitionConfig
})

export default PrimaryNav