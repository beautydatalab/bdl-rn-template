import React from 'react';

import renderer from 'react-test-renderer';
import styled from 'styled-components/native';

import {images} from 'src/images';

import {ListItem} from './index';

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

test('render correctly', () => {
  const tree = renderer
    .create(
      <>
        <ListItem>
          <Image source={images.header} />
          <ListItem.Content>
            <ListItem.Title>Image</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem chevron>
          <Image source={images.header} />
          <ListItem.Content>
            <ListItem.Title>Chevron</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem chevron bottomDivider>
          <Image source={images.header} />
          <ListItem.Content>
            <ListItem.Title>BottomDivider</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem chevron bottomDivider>
          <Image source={images.header} />
          <ListItem.Content>
            <ListItem.Title>Title</ListItem.Title>
            <ListItem.SubTitle>SubTitle</ListItem.SubTitle>
          </ListItem.Content>
        </ListItem>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
