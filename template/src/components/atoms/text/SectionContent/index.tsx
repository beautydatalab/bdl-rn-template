import React from 'react';

import {StyleProp, TextStyle} from 'react-native';

import styled from 'styled-components/native';

import {colors, sizes} from 'src/styles/fonts';

interface Props {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const Content = styled.Text`
  font-size: ${sizes.large}px;
  color: ${colors.content};
  font-weight: 400;
`;

export const SectionContent = ({children, style}: Props) => (
  <Content style={style}>{children}</Content>
);
