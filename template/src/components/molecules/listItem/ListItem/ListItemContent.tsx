import React from 'react';

import {ViewProps} from 'react-native';

import styled from 'styled-components/native';

import {paddings} from 'src/styles/space';

interface Props extends ViewProps {
  children?: React.ReactNode;
}

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-horizontal: ${paddings.short}px;
  flex: 1;
`;

export const ListItemContent = ({children, ...reset}: Props) => (
  <Container {...reset}>{children}</Container>
);
