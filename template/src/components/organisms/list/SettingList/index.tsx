import React from 'react';

import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleSheet,
} from 'react-native';

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

const renderItem: ListRenderItem<Setting> = ({item}) => {
  const {title, description} = item;
  return (
    <ListItem bottomDivider chevron>
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{title}</ListItem.Title>
        <ListItem.SubTitle>{description}</ListItem.SubTitle>
      </ListItem.Content>
    </ListItem>
  );
};

const keyExtractor = (_item: Setting, index: number) => {
  return index.toString();
};

export const SettingList = ({settings, style, ...rest}: Props) => {
  return (
    <FlatList<Setting>
      style={[styles.list, style]}
      renderItem={renderItem}
      data={settings}
      keyExtractor={keyExtractor}
      scrollEnabled={false}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  title: {
    marginBottom: margins.tiny,
  },
});
