import React from 'react';

import {StyleProp, TextStyle} from 'react-native';

import styled from 'styled-components/native';

import {colors, sizes} from 'src/styles/fonts';

interface Props {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const Title = styled.Text`
  font-size: ${sizes.extraLarge}px;
  color: ${colors.default};
  font-weight: 600;
`;

export const SectionTitle = ({children, style}: Props) => (
  <Title style={style}>{children}</Title>
);
