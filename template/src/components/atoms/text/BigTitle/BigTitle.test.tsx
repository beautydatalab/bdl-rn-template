import React from 'react';

import renderer from 'react-test-renderer';

import {BigTitle} from 'src/components/atoms/text/BigTitle';

test('render correctly', () => {
  const tree = renderer.create(<BigTitle>BigTitle</BigTitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
