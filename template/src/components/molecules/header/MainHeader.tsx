import React from 'react';
import {Dimensions, StyleProp, ViewStyle} from 'react-native';
import BigTitle from 'src/components/atoms/text/BigTitle';
import images from 'src/images';
import colors from 'src/styles/colors';
import styled from 'styled-components/native';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
}

const Image = styled.ImageBackground`
  height: 200px;
  width: ${Dimensions.get('window').width}px;
`;

const Title = styled(BigTitle)`
  margin-top: 150px;
  color: ${colors.white};
`;

const MainHeader = ({style, title}: Props) => (
  <Image style={style} source={images.header}>
    <Title>{title}</Title>
  </Image>
);

export default MainHeader;
