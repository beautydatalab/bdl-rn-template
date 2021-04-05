import React from 'react';

import {ViewProps} from 'react-native';

import styled from 'styled-components/native';

import {Text} from 'src/components/atoms/text/Text';
import {colors, palette} from 'src/styles/colors';
import {paddings} from 'src/styles/space';

import {ListItemContent} from './ListItemContent';
import {ListItemSubTitle} from './ListItemSubTitle';
import {ListItemTitle} from './ListItemTitle';

interface Props extends ViewProps {
  bottomDivider?: boolean;
  onPress?: () => void;
  chevron?: boolean;
  children?: React.ReactNode;
}

const Touchable = styled.TouchableOpacity``;

const Container = styled.View<{bottonDivider?: boolean}>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${paddings.medium}px;
  border-bottom-width: ${({bottonDivider}) => (bottonDivider ? 1 : 0)}px;
  border-color: ${colors.divider};
`;

const ChevronText = styled(Text)``;

export const ListItem = ({
  bottomDivider,
  onPress,
  children,
  chevron,
  ...reset
}: Props) => {
  const chevronComp = chevron ? (
    <ChevronText h3 color={palette.gray400}>
      {'>'}
    </ChevronText>
  ) : null;

  return (
    <Touchable onPress={onPress}>
      <Container bottonDivider={bottomDivider} {...reset}>
        {children}
        {chevronComp}
      </Container>
    </Touchable>
  );
};

ListItem.Content = ListItemContent;
ListItem.Title = ListItemTitle;
ListItem.SubTitle = ListItemSubTitle;
