import React from 'react';
import {
  Button,
  HorizontalButtons,
} from 'src/components/molecules/buttonGroup/HorizontalButtonGroup';
import {MainHeader} from 'src/components/molecules/header/MainHeader';
import {colors} from 'src/styles/colors';
import {paddings} from 'src/styles/space';
import styled from 'styled-components/native';

interface Props {
  title: string;
  buttons: Button[];
}

export const Container = styled.View`
  flex: 1;
`;

export const HeaderSection = styled.View``;

export const ContentSection = styled.View`
  flex: 1;
  padding-horizontal: ${paddings.medium}px;
  padding-vertical: ${paddings.medium}px;
  width: 100%;
  height: 100%;
  background: ${colors.white};
`;

export const CenterContentSection = styled(ContentSection)`
  align-items: center;
`;

const Header = styled(MainHeader)``;

const Buttons = styled(HorizontalButtons)`
  justify-content: center;
  align-items: center;
  background: white;
`;

export const SettingScreenTemplate = ({title, buttons}: Props) => (
  <Container>
    <Header title={title} />
    <Buttons buttons={buttons} />
  </Container>
);
