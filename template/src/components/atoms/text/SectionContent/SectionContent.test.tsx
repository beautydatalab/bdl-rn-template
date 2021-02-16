import React from 'react';

import renderer from 'react-test-renderer';

import {SectionContent} from 'src/components/atoms/text/SectionContent';

test('render correctly', () => {
  const tree = renderer
    .create(<SectionContent>BigTitle</SectionContent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
