import React from 'react';

import {Dimensions, StyleProp, ViewStyle} from 'react-native';

import styled from 'styled-components/native';

import {Text} from 'src/components/atoms/text/Text';
import {images} from 'src/images';
import {palette} from 'src/styles/colors';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
}

const Image = styled.ImageBackground`
  height: 200px;
  width: ${Dimensions.get('window').width}px;
`;

const Title = styled(Text)`
  margin-top: 150px;
  color: ${palette.white};
`;

export const MainHeader = ({style, title}: Props) => (
  <Image style={style} source={images.header}>
    <Title h1 color={palette.white}>
      {title}
    </Title>
  </Image>
);
