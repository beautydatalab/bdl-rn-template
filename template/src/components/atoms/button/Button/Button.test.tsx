import React from 'react';

import renderer from 'react-test-renderer';

import {Button} from 'src/components/atoms/button/Button';
import {palette} from 'src/styles/colors';

test('render correctly', () => {
  const tree = renderer
    .create(
      <>
        <Button onPress={() => console.log('???')} title={'Outline Button'} />
        <Button
          onPress={() => console.log('???')}
          title={'Outline Color Button'}
          titleColor={palette.red400}
        />
        <Button
          onPress={() => console.log('???')}
          title={'Outline Color Yellow Background Button'}
          titleColor={palette.red400}
          backgroundColor={palette.yellow500}
        />
        <Button
          onPress={() => console.log('???')}
          loading
          title={'Outline loading Button'}
        />
        <Button
          onPress={() => console.log('???')}
          loading
          title={'Outline loading Button'}
          titleColor={palette.red400}
        />
        <Button
          onPress={() => console.log('???')}
          disabled
          title={'Outline disabled Button'}
          titleColor={palette.red400}
        />
        <Button
          type={'solid'}
          onPress={() => console.log('???')}
          title={'Solid Button'}
        />
        <Button
          type={'solid'}
          onPress={() => console.log('???')}
          title={'Solid Color Button'}
          titleColor={palette.red400}
        />
        <Button
          type={'solid'}
          onPress={() => console.log('???')}
          title={'Solid Color Yellow Background Button'}
          titleColor={palette.red400}
          backgroundColor={palette.yellow500}
        />
        <Button
          type={'solid'}
          onPress={() => console.log('???')}
          loading
          title={'Solid loading Button'}
        />
        <Button
          type={'solid'}
          onPress={() => console.log('???')}
          loading
          title={'Solid loading Button'}
          titleColor={palette.red400}
        />
        <Button
          type={'solid'}
          onPress={() => console.log('???')}
          disabled
          title={'Solid disabled Button'}
        />
        <Button
          type={'clear'}
          onPress={() => console.log('???')}
          title={'Clear Button'}
        />
        <Button
          type={'clear'}
          onPress={() => console.log('???')}
          title={'Clear Red Button'}
          titleColor={palette.red400}
        />
        <Button
          type={'clear'}
          onPress={() => console.log('???')}
          loading
          title={'Clear loading Button'}
        />
        <Button
          type={'clear'}
          onPress={() => console.log('???')}
          loading
          title={'Clear loading Button'}
          titleColor={palette.red400}
        />
        <Button
          type={'clear'}
          onPress={() => console.log('???')}
          disabled
          title={'Clear disabled Button'}
        />
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
