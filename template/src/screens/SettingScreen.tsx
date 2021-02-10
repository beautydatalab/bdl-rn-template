import React, {Component} from 'react';
import {Button} from 'src/components/molecules/buttonGroup/HorizontalButtonGroup';
import {SettingScreenTemplate} from 'src/components/templates/SettingScreenTemplate';
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
    return <SettingScreenTemplate title="Setting Screen" buttons={buttons} />;
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
