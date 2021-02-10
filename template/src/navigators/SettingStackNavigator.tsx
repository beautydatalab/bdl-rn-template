import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SettingDetailScreen from 'src/screens/SettingDetailScreen';
import {SettingScreen} from 'src/screens/SettingScreen';

const Stack = createStackNavigator();

export const SettingStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Setting" component={SettingScreen} />
    <Stack.Screen name="SettingDetail" component={SettingDetailScreen} />
  </Stack.Navigator>
);
