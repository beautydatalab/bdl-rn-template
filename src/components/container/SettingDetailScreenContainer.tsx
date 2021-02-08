import React, {Component} from 'react';
import {Button} from 'src/components/molecules/buttons/HorizontalButtons';
import SettingScreenTemplate from 'src/components/templates/SettingScreenTemplate';
import {SettingScreenProps} from 'src/navigators/types';

type Props = {
  navigation: SettingScreenProps['navigation'];
};

interface State {
  buttons: Button[];
}

class SettingScreenContainer extends Component<Props, State> {
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

export default SettingScreenContainer;
