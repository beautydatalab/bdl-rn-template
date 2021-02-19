import React, {Component} from 'react';

import {
  Button,
  HorizontalButtons,
} from 'src/components/molecules/buttonGroup/HorizontalButtonGroup';
import {MainHeader} from 'src/components/molecules/header/MainHeader';
import {SettingList} from 'src/components/organisms/list/SettingList';
import {
  CenterContentSection,
  Container,
  HeaderSection,
} from 'src/components/templates/HeaderAndContentTemplate';
import {SettingScreenProps} from 'src/navigators/types';

type Props = {
  navigation: SettingScreenProps['navigation'];
};

interface State {
  buttons: Button[];
}

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

class SettingDetailScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {buttons: []};
  }
  render() {
    const {buttons} = this.state;
    return (
      <Container>
        <HeaderSection>
          <MainHeader title="Setting Screen" />
        </HeaderSection>
        <CenterContentSection>
          <SettingList contentContainerStyle={{flex: 1}} settings={settings} />
          <HorizontalButtons buttons={buttons} />
        </CenterContentSection>
      </Container>
    );
  }

  public componentDidMount() {
    this.fetch();
  }

  private fetch = () => {
    const {navigation} = this.props;
    this.setState({
      buttons: [
        {
          title: '< Prev Screen',
          onPress: () => navigation.goBack(),
        },
        {
          title: 'console.log ??',
          onPress: () => console.log('??'),
        },
      ],
    });
  };
}

export default SettingDetailScreen;
