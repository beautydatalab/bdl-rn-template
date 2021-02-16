import React, {Component} from 'react';

import {
  Button,
  HorizontalButtons,
} from 'src/components/molecules/buttonGroup/HorizontalButtonGroup';
import {MainHeader} from 'src/components/molecules/header/MainHeader';
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

export class SettingScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {buttons: []};
  }
  render() {
    const {buttons} = this.state;
    return (
      <Container>
        <HeaderSection>
          <MainHeader title="SettingScreen" />
        </HeaderSection>
        <CenterContentSection>
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
          title: 'Setting Detail',
          onPress: () => navigation.navigate('SettingDetail'),
        },
      ],
    });
  };
}
