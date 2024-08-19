import React from 'react';
import PropTypes from 'prop-types';
import {useDiscussionContext} from 'context/DiscussionContext';

/**
 * @return {null}
 */
function DeleteStatement(props) {

  const context = useDiscussionContext();

  const {
    behaviour: {
      allowAddingOfStatements = true,
    },
    translate
  } = context;

  const {
    onClick
  } = props;

  if ( allowAddingOfStatements !== true) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      type={'button'}
      onKeyUp={(event) => {
        if (event.key === 'Backspace' || event.key === 'Delete') {
          onClick();
        }
      }}
      className={'h5p-discussion-delete-button'}
    >
      <span
        className={'h5p-ri hri-times'}
      />
      <span className="visible-hidden">{translate('close')}</span>
    </button>
  );
}

DeleteStatement.propTypes = {
  onClick: PropTypes.func,
};

export default DeleteStatement;
