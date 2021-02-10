import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SettingStackNavigator} from 'src/navigators/SettingStackNavigator';
import {HomeScreen} from 'src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const MainBottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={'Home'} component={HomeScreen} />
    <Tab.Screen name={'Setting'} component={SettingStackNavigator} />
  </Tab.Navigator>
);
