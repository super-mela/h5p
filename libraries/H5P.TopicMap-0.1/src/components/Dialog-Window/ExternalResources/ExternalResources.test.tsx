import { render } from '@testing-library/react';
import * as React from 'react';
import { DialogExternalResources } from './ExternalResources';

describe(DialogExternalResources.name, () => {
  it('Should have rendered', () => {
    const resource = render(
      <DialogExternalResources url="" label="" />,
    ).container;

    expect(resource.querySelector('iframe')).toBeTruthy();
  });
});
