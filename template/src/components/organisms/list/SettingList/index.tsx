import React from 'react';

import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ViewStyle,
  StyleProp,
} from 'react-native';

import styled from 'styled-components/native';

import {ListItem} from 'src/components/molecules/listItem/ListItem';
import {margins} from 'src/styles/space';

interface Setting {
  title: string;
  description: string;
}

interface Props
  extends Omit<FlatListProps<Setting>, 'data' | 'renderItem' | 'keyExtractor'> {
  settings: Setting[];
}

const List = styled(FlatList as new () => FlatList<Setting>).attrs({
  contentContainerStyle: {marginBottom: margins.tiny} as StyleProp<ViewStyle>,
})`
  width: 100%;
`;

const Title = styled(ListItem.Title)`
  margin-bottom: ${margins.tiny}px;
`;

const renderItem: ListRenderItem<Setting> = ({item}) => {
  const {title, description} = item;
  return (
    <ListItem bottomDivider chevron>
      <ListItem.Content>
        <Title>{title}</Title>
        <ListItem.SubTitle>{description}</ListItem.SubTitle>
      </ListItem.Content>
    </ListItem>
  );
};

const keyExtractor = (_item: Setting, index: number) => {
  return index.toString();
};

export const SettingList = ({settings, ...rest}: Props) => {
  return (
    <List
      renderItem={renderItem}
      data={settings}
      keyExtractor={keyExtractor}
      scrollEnabled={false}
      {...rest}
    />
  );
};
