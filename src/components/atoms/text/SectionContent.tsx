import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {colors, sizes} from 'src/styles/fonts';
import styled from 'styled-components/native';

interface Props {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const Content = styled.Text`
  font-size: ${sizes.large};
  color: ${colors.content};
  font-weight: 400;
`;

const SectionContent = ({children, style}: Props) => (
  <Content style={style}>{children}</Content>
);

export default SectionContent;
