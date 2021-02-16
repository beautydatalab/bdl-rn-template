import React from 'react';

import renderer from 'react-test-renderer';

import {Button} from 'src/components/atoms/button/Button';

test('render correctly', () => {
  const tree = renderer
    .create(<Button title="Test" onPress={() => console.log('test')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
