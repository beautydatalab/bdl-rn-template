import React, {Component} from 'react';
import {Section} from 'src/components/organisms/ContentSections';
import {DescriptionSectionsTemplate} from 'src/components/templates/DescriptionSectionsTemplate';

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
      <DescriptionSectionsTemplate
        title="Welcome to Home"
        sections={sections}
      />
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
