import React from 'react';

import {TextProps} from 'react-native';

import styled from 'styled-components/native';

import {colors} from 'src/styles/colors';
import {sizes} from 'src/styles/fonts';

interface Props extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  color?: string;
  children: React.ReactNode;
}

const TextElement = styled.Text`
  color: ${colors.black};
`;

export const Text = ({
  h1,
  h2,
  h3,
  h4,
  color = colors.black,
  style,
  children,
  ...restProps
}: Props) => {
  const fontSizeStyle = h1
    ? {fontSize: sizes.extraHuge}
    : h2
    ? {fontSize: sizes.huge}
    : h3
    ? {fontSize: sizes.extraLarge}
    : h4
    ? {fontSize: sizes.large}
    : undefined;
  const colorStyle = {color};
  return (
    <TextElement {...restProps} style={[style, fontSizeStyle, colorStyle]}>
      {children}
    </TextElement>
  );
};
