import {storiesOf} from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';

import {BigTitle} from './BigTitle';
import {SectionContent} from './SectionContent';
import {SectionTitle} from './SectionTitle';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

storiesOf('text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('BigTitle', () => <BigTitle>BigTitle</BigTitle>)
  .add('SectionContent', () => <SectionContent>SectionContent</SectionContent>)
  .add('SectionTitle', () => <SectionTitle>SectionTitle</SectionTitle>);
