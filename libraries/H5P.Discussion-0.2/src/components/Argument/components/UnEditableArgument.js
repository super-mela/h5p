import React from 'react';
import PropTypes from 'prop-types';

function UnEditableArgument(props) {
  return (
    <p className={'h5p-discussion-element'}>
      {props.argument}
    </p>
  );
}

UnEditableArgument.propTypes = {
  argument: PropTypes.string,
};

export default UnEditableArgument;