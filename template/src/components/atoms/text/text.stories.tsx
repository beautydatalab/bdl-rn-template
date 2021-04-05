import React from 'react';

import {storiesOf} from '@storybook/react-native';
import styled from 'styled-components/native';

import {palette} from 'src/styles/colors';
import {margins} from 'src/styles/space';

import {Text} from './Text';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const EmptyHeightView = styled.View`
  height: ${margins.medium}px;
`;

storiesOf('text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Text', () => (
    <>
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text h4>Heading 4</Text>
      <EmptyHeightView />
      <Text h3 color={palette.yellow600}>
        <Text h2 color={palette.red500}>
          This is{' '}
        </Text>
        color text
      </Text>
    </>
  ));
