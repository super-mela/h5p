import { render } from '@testing-library/react';
import * as React from 'react';
import { DialogTabs } from './DialogTabs';

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  })),
});

describe(DialogTabs.name, () => {
  it('should have rendered.', () => {
    const item = {
      id: 'testid',
      label: 'Test label',
      description: 'Testing',
      dialog: {
        hasNote: true,
        text: 'Dialog test',
        showAddLinks: false,
      },
    };
    const tabs = render(<DialogTabs item={item} />).container;

    expect(tabs.querySelector('div')).toBeTruthy();
  });

  it('should not have rendered any tabs', () => {
    const item = {
      id: 'testid',
      label: 'Test label',
      description: 'Testing',
      dialog: {
        hasNote: false,
        text: 'Dialog test',
        showAddLinks: false,
      },
    };
    const tabs = render(<DialogTabs item={item} />).container;

    expect(tabs.querySelector('button')).toBeNull();
  });

  it('should have rendered two tabs', () => {
    const item = {
      id: 'testid',
      label: 'Test label',
      description: 'Testing',
      dialog: {
        hasNote: true,
        text: 'Dialog test',
        showAddLinks: true,
      },
    };
    const tabs = render(<DialogTabs item={item} />).container;

    expect(tabs.querySelectorAll('button').length).toBe(2);
    expect(tabs.querySelectorAll('button')[0].id).toContain('Text');
    expect(tabs.querySelectorAll('button')[1].id).toContain('Resources');
  });

  it('should have rendered three tabs', () => {
    const item = {
      id: 'testid',
      label: 'Test label',
      description: 'Testing',
      dialog: {
        hasNote: true,
        text: 'Dialog test',
        showAddLinks: true,
        video: [{
          path: 'https://player.vimeo.com/video/224857514?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1',
        }],
      },
    };
    const tabs = render(<DialogTabs item={item} />).container;

    expect(tabs.querySelectorAll('button').length).toBe(3);
    expect(tabs.querySelectorAll('button')[0].id).toContain('Text');
    expect(tabs.querySelectorAll('button')[1].id).toContain('Resources');
    expect(tabs.querySelectorAll('button')[2].id).toContain('Video');
  });
});
