/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import {MainBottomTabNavigator} from 'src/navigators/MainBottomTabNavigator';
import {getRootStore} from 'src/stores/RootStore';

export default class App extends Component {
  public render() {
    return (
      <Provider store={getRootStore}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <MainBottomTabNavigator />
        </NavigationContainer>
      </Provider>
    );
  }

  public componentDidMount() {
    SplashScreen.hide();
  }
}
