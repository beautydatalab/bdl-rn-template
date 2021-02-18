import React from 'react';

import {storiesOf} from '@storybook/react-native';
import styled from 'styled-components/native';

import {palette} from 'src/styles/colors';
import {margins, paddings} from 'src/styles/space';

import {Button} from './Button';

const CenterView = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: paddings.huge,
  },
})`
  flex: 1;
`;

const MarginBottomButton = styled(Button)`
  margin-bottom: ${margins.short}px;
`;

storiesOf('button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default Button', () => (
    <>
      <MarginBottomButton
        onPress={() => console.log('???')}
        title={'Outline Button'}
      />
      <MarginBottomButton
        onPress={() => console.log('???')}
        title={'Outline Color Button'}
        titleColor={palette.red400}
      />
      <MarginBottomButton
        onPress={() => console.log('???')}
        title={'Outline Color Yellow Background Button'}
        titleColor={palette.red400}
        backgroundColor={palette.yellow500}
      />
      <MarginBottomButton
        onPress={() => console.log('???')}
        loading
        title={'Outline loading Button'}
      />
      <MarginBottomButton
        onPress={() => console.log('???')}
        loading
        title={'Outline loading Button'}
        titleColor={palette.red400}
      />
      <MarginBottomButton
        onPress={() => console.log('???')}
        disabled
        title={'Outline disabled Button'}
        titleColor={palette.red400}
      />
      <MarginBottomButton
        type={'solid'}
        onPress={() => console.log('???')}
        title={'Solid Button'}
      />
      <MarginBottomButton
        type={'solid'}
        onPress={() => console.log('???')}
        title={'Solid Color Button'}
        titleColor={palette.red400}
      />
      <MarginBottomButton
        type={'solid'}
        onPress={() => console.log('???')}
        title={'Solid Color Yellow Background Button'}
        titleColor={palette.red400}
        backgroundColor={palette.yellow500}
      />
      <MarginBottomButton
        type={'solid'}
        onPress={() => console.log('???')}
        loading
        title={'Solid loading Button'}
      />
      <MarginBottomButton
        type={'solid'}
        onPress={() => console.log('???')}
        loading
        title={'Solid loading Button'}
        titleColor={palette.red400}
      />
      <MarginBottomButton
        type={'solid'}
        onPress={() => console.log('???')}
        disabled
        title={'Solid disabled Button'}
      />
      <MarginBottomButton
        type={'clear'}
        onPress={() => console.log('???')}
        title={'Clear Button'}
      />
      <MarginBottomButton
        type={'clear'}
        onPress={() => console.log('???')}
        title={'Clear Red Button'}
        titleColor={palette.red400}
      />
      <MarginBottomButton
        type={'clear'}
        onPress={() => console.log('???')}
        loading
        title={'Clear loading Button'}
      />
      <MarginBottomButton
        type={'clear'}
        onPress={() => console.log('???')}
        loading
        title={'Clear loading Button'}
        titleColor={palette.red400}
      />
      <MarginBottomButton
        type={'clear'}
        onPress={() => console.log('???')}
        disabled
        title={'Clear disabled Button'}
      />
    </>
  ));
