import React from 'react';

import styled from 'styled-components/native';

import {Text, Props as TextProps} from 'src/components/atoms/text/Text';

interface Props extends Omit<TextProps, 'h1' | 'h2' | 'h3' | 'h4'> {
  children?: React.ReactNode;
}

const Title = styled(Text)``;

export const ListItemTitle = ({children, ...reset}: Props) => (
  <Title h4 {...reset}>
    {children}
  </Title>
);
