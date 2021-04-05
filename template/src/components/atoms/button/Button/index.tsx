import React from 'react';

import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';

import styled from 'styled-components/native';

import {Text} from 'src/components/atoms/text/Text';
import {palette, colors} from 'src/styles/colors';
import {paddings} from 'src/styles/space';

type ButtonType = 'solid' | 'clear' | 'outline';

interface Props extends TouchableOpacityProps {
  title: string;
  titleColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  backgroundColor?: string;
}

const StyledButton = styled.TouchableOpacity`
  border-radius: 8px;
  padding: ${paddings.short}px ${paddings.medium}px;
`;

const Title = styled(Text)<{color: string}>`
  color: ${({color}) => color};
`;

const ActivityIndicator = styled.ActivityIndicator``;

export const Button = ({
  title,
  titleColor,
  titleStyle,
  type = 'outline',
  disabled,
  loading,
  style,
  backgroundColor,
  onPress,
  ...rest
}: Props) => {
  const renderTitleColor =
    disabled && type !== 'solid'
      ? colors.disabled
      : titleColor
      ? titleColor
      : type === 'solid'
      ? palette.white
      : colors.primary;

  const renderBackgroundColor =
    type === 'clear'
      ? 'transparent'
      : disabled && type === 'solid'
      ? colors.disabled
      : backgroundColor
      ? backgroundColor
      : type === 'solid'
      ? colors.primary
      : palette.white;

  const absoluteButtonStyle = {
    backgroundColor: renderBackgroundColor,
    borderColor: renderTitleColor,
    borderWidth: type === 'outline' ? 1 : 0,
  };

  const handlePress = (event: GestureResponderEvent) => {
    if (loading || !onPress) {
      return;
    }
    onPress(event);
  };

  return (
    <StyledButton
      style={[style, absoluteButtonStyle]}
      onPress={handlePress}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={renderTitleColor} />
      ) : (
        <Title style={titleStyle} color={renderTitleColor}>
          {title}
        </Title>
      )}
    </StyledButton>
  );
};
