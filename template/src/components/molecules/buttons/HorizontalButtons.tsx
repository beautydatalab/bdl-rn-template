import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {margins} from 'src/styles/space';
import styled from 'styled-components/native';

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

const Button = styled.Button`
  margin-right: ${margins.medium};
`;

const HorizontalButtons = ({buttons, style}: Props) => (
  <Container style={style}>
    {buttons.map((button) => (
      <Button
        key={button.title}
        title={button.title}
        onPress={button.onPress}
      />
    ))}
  </Container>
);

export default HorizontalButtons;
