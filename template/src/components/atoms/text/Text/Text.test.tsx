import React from 'react';

import renderer from 'react-test-renderer';

import {Text} from 'src/components/atoms/text/Text';
import {palette} from 'src/styles/colors';

test('render correctly', () => {
  const tree = renderer
    .create(
      <>
        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>
        <Text h3 color={palette.yellow600}>
          <Text h2 color={palette.red500}>
            This is{' '}
          </Text>
          color text
        </Text>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
