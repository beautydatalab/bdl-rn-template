import React from 'react';

import {StyleProp, ViewStyle} from 'react-native';

import styled from 'styled-components/native';

import {Button} from 'src/components/atoms/button/Button';
import {margins} from 'src/styles/space';

interface Props {
  style?: StyleProp<ViewStyle>;
  buttons: Button[];
}

export interface Button {
  title: string;
  onPress: () => void;
}

const Container = styled.View`
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  margin-right: ${margins.medium}px;
`;

export const HorizontalButtons = ({buttons, style}: Props) => (
  <Container style={style}>
    {buttons.map((button) => (
      <StyledButton
        key={button.title}
        title={button.title}
        onPress={button.onPress}
      />
    ))}
  </Container>
);
