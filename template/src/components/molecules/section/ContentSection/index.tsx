import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SectionContent} from 'src/components/atoms/text/SectionContent';
import {SectionTitle} from 'src/components/atoms/text/SectionTitle';
import {margins} from 'src/styles/space';
import styled from 'styled-components/native';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  content: string;
}

const Container = styled.View``;

const Title = styled(SectionTitle)`
  margin-bottom: ${margins.short}px;
`;

const Content = styled(SectionContent)``;

export const ContentSection = ({style, title, content}: Props) => (
  <Container style={style}>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
);
