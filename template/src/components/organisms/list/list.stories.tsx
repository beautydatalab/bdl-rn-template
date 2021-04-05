import React from 'react';

import {storiesOf} from '@storybook/react-native';
import styled from 'styled-components/native';

import {Text} from 'src/components/atoms/text/Text';
import {palette} from 'src/styles/colors';
import {margins} from 'src/styles/space';

import {SettingList} from './SettingList';

const SectionTitle = styled(Text)`
  margin-bottom: ${margins.medium}px;
`;

const CenterView = styled.ScrollView`
  flex: 1;
`;

const settings = [
  {
    title: '로그인',
    description:
      '현재 로그인이 되어있지 않아요. 로그인해서 더 많은 서비스를 누려보아요',
  },
  {
    title: '알림 설정',
    description: '알림 설정을 통해서 앱의 알림을 통제할 수 있습니다',
  },
  {
    title: '테마 변경',
    description:
      '앱이 마음에 안드세요? 그러면 테마를 바꿔서 기분을 내보는 것은 어떠세요?',
  },
  {title: '회원탈퇴', description: '너무 아쉽지만 ㅠ...  보내줄게요'},
];

storiesOf('list', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SettingList', () => (
    <>
      <SettingList settings={settings} />
    </>
  ));
