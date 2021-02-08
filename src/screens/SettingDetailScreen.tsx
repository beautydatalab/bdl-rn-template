import React from 'react';
import SettingDetailScreenContainer from 'src/components/container/SettingDetailScreenContainer';
import {SettingScreenProps} from 'src/navigators/types';

const SettingScreen = ({navigation}: SettingScreenProps) => (
  <SettingDetailScreenContainer navigation={navigation} />
);

export default SettingScreen;
