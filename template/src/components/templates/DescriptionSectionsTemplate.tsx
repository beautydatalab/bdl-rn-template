import React from 'react';
import MainHeader from 'src/components/molecules/header/MainHeader';
import ContentSections, {
  Section,
} from 'src/components/organisms/ContentSections';
import {margins} from 'src/styles/space';
import styled from 'styled-components/native';

interface Props {
  title: string;
  sections: Section[];
}

const Container = styled.View``;

const Header = styled(MainHeader)`
  margin-bottom: ${margins.large}px;
`;

const Sections = styled(ContentSections)``;

const DescriptionSectionsTemplate = ({title, sections}: Props) => (
  <Container>
    <Header title={title} />
    <Sections sections={sections} />
  </Container>
);

export default DescriptionSectionsTemplate;
