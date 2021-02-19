import React from 'react';

import styled from 'styled-components/native';

import {Text, Props as TextProps} from 'src/components/atoms/text/Text';
import {palette} from 'src/styles/colors';

interface Props extends Omit<TextProps, 'h1' | 'h2' | 'h3' | 'h4'> {
  children?: React.ReactNode;
}

const Title = styled(Text)``;

export const ListItemSubTitle = ({
  children,
  color = palette.gray500,
  ...reset
}: Props) => (
  <Title color={color} {...reset}>
    {children}
  </Title>
);
