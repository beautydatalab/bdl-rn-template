import React from 'react';
import HorizontalButtons, {
  Button,
} from 'src/components/molecules/buttons/HorizontalButtons';
import MainHeader from 'src/components/molecules/header/MainHeader';
import {paddings} from 'src/styles/space';
import styled from 'styled-components/native';

interface Props {
  title: string;
  buttons: Button[];
}

const Container = styled.View``;

const Header = styled(MainHeader)``;

const Buttons = styled(HorizontalButtons)`
  justify-content: center;
  align-items: center;
  background: white;
  padding-vertical: ${paddings.large};
`;

const DescriptionSectionsTemplate = ({title, buttons}: Props) => (
  <Container>
    <Header title={title} />
    <Buttons buttons={buttons} />
  </Container>
);

export default DescriptionSectionsTemplate;
