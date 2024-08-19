import React from 'react';
import {useDiscussionContext} from 'context/DiscussionContext';

function DragArrows() {
  const context = useDiscussionContext();

  return (
    <div className={'h5p-discussion-drag-element'}>
      <span
        className="h5p-ri hri-move"
      />
      <span className={'visible-hidden'}>{context.translations.drag}</span>
    </div>
  );
}

export default DragArrows;
