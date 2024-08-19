import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import classnames from 'classnames';
import {ElementLayout} from './Element';
import {ArgumentLayout} from '../Argument/Argument';
import UnEditableArgument from '../Argument/components/UnEditableArgument';
import {getDnDId} from '../utils';

function Column(props) {
  const {
    droppableId,
    children,
    additionalClassName,
    argumentsList,
  } = props;

  return (
    <div
      className={additionalClassName}
    >
      <Droppable
        droppableId={droppableId}
        renderClone={(provided, snapshot, rubrics) => {
          const index = argumentsList.findIndex((element) => getDnDId(element) === rubrics.draggableId);
          const argument = argumentsList[index];
          return (
            <ElementLayout
              provided={provided}
              snapshot={snapshot}
            >
              <ArgumentLayout
                activeDraggable={true}
                statementDisplay={<UnEditableArgument argument={argument.argumentText}/>}
              />
            </ElementLayout>
          );
        }}
      >
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classnames('h5p-discussion-column', {
                'h5p-discussion-drag-active': snapshot.isDraggingOver && snapshot.draggingFromThisWith === null
              })}
            >
              {children}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

Column.propTypes = {
  droppableId: PropTypes.string.isRequired,
  additionalClassName: PropTypes.string,
  argumentsList: PropTypes.array,
};

Column.defaultProps = {
  droppableId: null,
  additionalClassName: null,
  argumentsList: [],
};

export default Column;
