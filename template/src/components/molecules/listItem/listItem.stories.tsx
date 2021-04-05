import React from 'react';

import {storiesOf} from '@storybook/react-native';
import styled from 'styled-components/native';

import {images} from 'src/images';
import {palette} from 'src/styles/colors';
import {margins, paddings} from 'src/styles/space';

import {ListItem} from './ListItem';

const CenterView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: paddings.large,
  },
})`
  flex: 1;
  background-color: ${palette.gray100};
`;

const WhiteListItem = styled(ListItem)`
  background: ${palette.white};
`;

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

storiesOf('listItem', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ListItem', () => (
    <>
      <WhiteListItem>
        <Image source={images.header} />
        <ListItem.Content>
          <ListItem.Title>Image</ListItem.Title>
        </ListItem.Content>
      </WhiteListItem>
      <WhiteListItem chevron>
        <Image source={images.header} />
        <ListItem.Content>
          <ListItem.Title>Chevron</ListItem.Title>
        </ListItem.Content>
      </WhiteListItem>
      <WhiteListItem chevron bottomDivider>
        <Image source={images.header} />
        <ListItem.Content>
          <ListItem.Title>BottomDivider</ListItem.Title>
        </ListItem.Content>
      </WhiteListItem>
      <WhiteListItem chevron bottomDivider>
        <Image source={images.header} />
        <ListItem.Content>
          <ListItem.Title>Title</ListItem.Title>
          <ListItem.SubTitle>SubTitle</ListItem.SubTitle>
        </ListItem.Content>
      </WhiteListItem>
    </>
  ));
