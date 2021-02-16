import React from 'react';

import {storiesOf} from '@storybook/react-native';
import styled from 'styled-components/native';

import {Button} from './Button';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

storiesOf('button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default Button', () => (
    <Button onPress={() => console.log('???')} title={'Test Button'} />
  ));
