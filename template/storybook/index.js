// storybook/index.js
import './rn-addons';

import {configure, getStorybookUI} from '@storybook/react-native';
import React, {Component} from 'react';
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
