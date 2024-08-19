import React from 'react';
import PropTypes from 'prop-types';
import {useDiscussionContext} from 'context/DiscussionContext';

function AddArgument(props) {

  const context = useDiscussionContext();
  const {
    onClick,
  } = props;

  return (
    <button
      aria-label={context.translate('addArgument')}
      className={'h5p-discussion-add-button'}
      onClick={onClick}
      type={'button'}
    >
      <div className={'h5p-discussion-add-button-content'}>
        <span className={'h5p-discussion-add-button-icon fa fa-plus'} aria-hidden={true} />
        <span className={'h5p-discussion-add-button-text'}>{context.translate('addArgument')}</span>
      </div>
    </button>
  );
}

AddArgument.propTypes = {
  displayFull: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AddArgument;
