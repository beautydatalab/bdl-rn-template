/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainBottomTabNavigator from 'src/navigators/MainBottomTabNavigator';

export default class App extends Component {
  public render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MainBottomTabNavigator />
      </NavigationContainer>
    );
  }

  public componentDidMount() {
    SplashScreen.hide();
  }
}
