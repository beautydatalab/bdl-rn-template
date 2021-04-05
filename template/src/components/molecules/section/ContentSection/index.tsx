import React from 'react';

import {StyleProp, ViewStyle} from 'react-native';

import styled from 'styled-components/native';

import {Text} from 'src/components/atoms/text/Text';
import {margins} from 'src/styles/space';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  content: string;
}

const Container = styled.View``;

const Title = styled(Text)`
  margin-bottom: ${margins.short}px;
`;

const Content = styled(Text)``;

export const ContentSection = ({style, title, content}: Props) => (
  <Container style={style}>
    <Title h3>{title}</Title>
    <Content h4>{content}</Content>
  </Container>
);
