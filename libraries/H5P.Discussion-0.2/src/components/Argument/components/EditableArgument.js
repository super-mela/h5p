import React, {useRef, useEffect} from 'react';
import PropsTypes from 'prop-types';
import classnames from 'classnames';
import {debounce} from '../../utils';
import {useDiscussionContext} from '../../../context/DiscussionContext';

function EditableArgument({
  argument,
  inEditMode,
  onChange,
  startEditing,
  stopEditing,
  idBase,
}) {
  const { translate } = useDiscussionContext();

  const inputRef = useRef();

  useEffect(() => {
    if (inEditMode === true) {
      inputRef.current.value = argument;
      inputRef.current.focus();
    }
  }, [inEditMode]);

  /**
   * Handle keydown events.
   * KeyDown is used instead of KeyUp to prevent focused input to be blurred
   * when arguments are added with the enter key.
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inEditMode) {
        stopEditing();
      }
      else {
        startEditing();
      }
    }
  };

  const id = 'es_' + idBase;
  const labelId = 'label_' + id;
  const inputId = 'input_' + id;

  /*
   * TODO: Clean this up. This feels like a very weird construct. Why can't
   *       the `input` element be used on its own? Why the textbox wrapper that
   *       adds an extra level while there already is an input field? Also, why
   *       is ARIA labelling handled that way?
   */
  return (
    <div
      role={'textbox'}
      tabIndex={0}
      onClick={startEditing}
      className={'h5p-discussion-editable-container'}
      onKeyDown={handleKeyDown}
      aria-labelledby={labelId}
    >
      <div>
        <label
          title={argument}
          htmlFor={inputId}
          id={labelId}
          className={classnames('h5p-discussion-editable', {
            'hidden': inEditMode === false,
          })}
        >
          <span className={'visible-hidden'}>{translate('argument')}</span>
          <input
            className={'h5p-discussion-editable'}
            ref={inputRef}
            onBlur={stopEditing}
            onChange={debounce(() => onChange(inputRef.current.value), 200)}
            aria-label={`${translate('editArgument')} ${argument}`}
            id={inputId}
          />
        </label>
        <p
          className={classnames('h5p-discussion-noneditable', {
            'hidden': inEditMode === true,
          })}
        >
          {argument}
        </p>
      </div>
    </div>
  );
}

EditableArgument.propTypes = {
  argument: PropsTypes.string,
  inEditMode: PropsTypes.bool,
  onChange: PropsTypes.func,
  startEditing: PropsTypes.func,
  stopEditing: PropsTypes.func,
  idBase: PropsTypes.oneOfType([
    PropsTypes.string,
    PropsTypes.number,
  ]),
};

EditableArgument.defaultProps = {
  inEditMode: false,
};

export default EditableArgument;
