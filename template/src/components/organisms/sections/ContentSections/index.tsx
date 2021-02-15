import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ContentSection} from 'src/components/molecules/section/ContentSection';
import {margins} from 'src/styles/space';
import styled from 'styled-components/native';

interface Props {
  style?: StyleProp<ViewStyle>;
  sections: Section[];
}

export interface Section {
  title: string;
  content: string;
}

const Container = styled.View``;

const Section = styled(ContentSection)`
  margin-bottom: ${margins.huge}px;
`;

export const ContentSections = ({style, sections}: Props) => (
  <Container style={style}>
    {sections.map((section, index) => (
      <Section key={index} title={section.title} content={section.content} />
    ))}
  </Container>
);
