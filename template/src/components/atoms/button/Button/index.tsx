import React from 'react';

import {StyleProp, TextStyle} from 'react-native';

import styled from 'styled-components/native';

import {colors, sizes} from 'src/styles/fonts';

interface Props {
  style?: StyleProp<TextStyle>;
  title: string;
  onPress: () => void;
}

const StyledButton = styled.Button`
  font-size: ${sizes.large}px;
  color: ${colors.content};
  font-weight: 400;
`;

export const Button = (props: Props) => <StyledButton {...props} />;
