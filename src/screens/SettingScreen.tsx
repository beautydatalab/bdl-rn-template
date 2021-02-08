import React from 'react';
import SettingScreenContainer from 'src/components/container/SettingScreenContainer';
import {SettingScreenProps} from 'src/navigators/types';

const SettingScreen = ({navigation}: SettingScreenProps) => (
  <SettingScreenContainer navigation={navigation} />
);

export default SettingScreen;
