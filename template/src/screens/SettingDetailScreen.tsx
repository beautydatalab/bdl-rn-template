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
