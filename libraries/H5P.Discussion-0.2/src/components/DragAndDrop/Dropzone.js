import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import classnames from 'classnames';

function Dropzone({droppablePrefix, label, disableDrop}) {

  return (
    <Droppable
      droppableId={droppablePrefix + '-dzone'}
      isDropDisabled={disableDrop}
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div
              className={classnames('h5p-discussion-dropzone', {
                'h5p-discussion-active': snapshot.isDraggingOver
              })}
            >
              <div>
                {label}
              </div>
            </div>
            <div style={{display: 'none'}}>
              {provided.placeholder}
            </div>
          </div>
        );
      }}
    </Droppable>
  );
}

export default Dropzone;
