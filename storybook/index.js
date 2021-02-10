// storybook/index.js
import './rn-addons';

import {configure, getStorybookUI} from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
