import { render } from '@testing-library/react';
import * as React from 'react';
import { TopicMapItem } from './TopicMapItem';

describe(TopicMapItem.name, () => {
  it('should render', () => {
    const item = {
      id: '1',
      topicImage: {
        path: 'https://images.unsplash.com/photo-1569587112025-0d460e81a126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80',
        alt: '',
      },
      label: 'Sheep in the distance',
      description: '',
      widthPercentage: 50,
      heightPercentage: 25,
      xPercentagePosition: 3,
      yPercentagePosition: 5,
      dialog: {
        text: 'Dialog text',
        hasNote: true,
        showAddLinks: false,
      },
    };

    const { container } = render(
      <TopicMapItem item={item} />,
    );

    expect(container.querySelector('button')).toBeTruthy();
  });
});
