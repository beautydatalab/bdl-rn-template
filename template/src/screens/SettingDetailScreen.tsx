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

export const SettingDetailScreen = (props: Props) => {
  const [buttons, setButtons] = useState<Button[]>([]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const fetch = useCallback(() => {
    const {navigation} = props;
    setButtons([
      {
        title: '< Prev Screen',
        onPress: () => navigation.goBack(),
      },
      {
        title: 'console.log ??',
        onPress: () => console.log('??'),
      },
    ]);
  }, [props]);

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
};
