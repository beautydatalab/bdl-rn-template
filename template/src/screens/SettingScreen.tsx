import React, {useCallback, useEffect, useState} from 'react';

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

export const SettingScreen = (props: Props) => {
  const [buttons, setButtons] = useState<Button[]>([]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const fetch = useCallback(() => {
    const {navigation} = props;
    setButtons([
      {
        title: 'Setting Detail',
        onPress: () => navigation.navigate('SettingDetail'),
      },
    ]);
  }, [props]);

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
};
