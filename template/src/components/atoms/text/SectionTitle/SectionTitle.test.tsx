import React from 'react';

import renderer from 'react-test-renderer';

import {SectionTitle} from 'src/components/atoms/text/SectionTitle';

test('render correctly', () => {
  const tree = renderer.create(<SectionTitle>BigTitle</SectionTitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
