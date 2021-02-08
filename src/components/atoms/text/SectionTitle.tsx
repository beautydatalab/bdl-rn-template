import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {colors, sizes} from 'src/styles/fonts';
import styled from 'styled-components/native';

interface Props {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const Title = styled.Text`
  font-size: ${sizes.extraLarge};
  color: ${colors.default};
  font-weight: 600;
`;

const SectionTitle = ({children, style}: Props) => (
  <Title style={style}>{children}</Title>
);

export default SectionTitle;
