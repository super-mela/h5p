import { render } from '@testing-library/react';
import * as React from 'react';
import { DialogAudio } from './DialogAudio';

describe(DialogAudio.name, () => {
  it('should have rendered', () => {
    const audio = render(
      <DialogAudio audioTrack={{ path: '' }} subtext="<p>Subtext</p>" />,
    ).container;

    expect(audio.querySelector('audio')).toBeTruthy();
    expect(audio.querySelector('p')).toBeTruthy();
  });
});
