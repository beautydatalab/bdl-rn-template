import React, {Component} from 'react';

import {MainHeader} from 'src/components/molecules/header/MainHeader';
import {
  ContentSections,
  Section,
} from 'src/components/organisms/sections/ContentSections';
import {
  Container,
  ContentSection,
  HeaderSection,
} from 'src/components/templates/HeaderAndContentTemplate';

type Props = Record<string, never>;

interface State {
  sections: Section[];
}

export class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {sections: []};
  }
  render() {
    const {sections} = this.state;
    return (
      <Container>
        <HeaderSection>
          <MainHeader title="Welcome to Home" />
        </HeaderSection>
        <ContentSection>
          <ContentSections sections={sections} />
        </ContentSection>
      </Container>
    );
  }

  public componentDidMount() {
    this.fetch();
  }

  private fetch = () => {
    this.setState({
      sections: [
        {
          title: 'Step One',
          content: '이것은 홈 스크린의 내용 첫 번째 섹션 내용입니다.',
        },
        {
          title: 'Step Two',
          content: '이것은 홈 스크린의 내용 두 번째 섹션 내용입니다.',
        },
        {
          title: 'Step Three',
          content: '이것은 홈 스크린의 내용 세 번째 섹션 내용입니다.',
        },
        {
          title: 'Step Four',
          content: '이것은 홈 스크린의 내용 네 번째 섹션 내용입니다.',
        },
      ],
    });
  };
}
