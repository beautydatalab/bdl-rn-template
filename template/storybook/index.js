// storybook/index.js
import './rn-addons';

import React, {Component} from 'react';

import {configure, getStorybookUI} from '@storybook/react-native';
import SplashScreen from 'react-native-splash-screen';

import {loadStories} from './storyLoader';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default class StorybookUIHMRRoot extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <StorybookUIRoot />;
  }
}
