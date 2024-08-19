import React from 'react';
import PropTypes from 'prop-types';
import './EditingDialog.scss';

/**
 * @param {object} props React props.
 * @returns {object} JSX element.
 */
const EditingDialog = (props) => {
  const titleClasses = [
    'title',
    ...props.titleClasses || [],
  ];

  const overlayRef = React.createRef();
  const dialogRef = React.createRef();

  /**
   * Resize overlay to fit absolutely positioned overlays.
   */
  const resize = () => {
    if (!overlayRef.current || !dialogRef.current) {
      return;
    }

    // Let browser size dialog
    dialogRef.current.style.height = '';

    const computeRequiredHeight = () => {
      let paddingBottom = 0;
      if (dialogRef.current) {
        const style = window.getComputedStyle(
          dialogRef.current.querySelector('.h5p-editing-dialog-body')
        );
        paddingBottom = parseFloat(
          style.getPropertyValue('padding-bottom')
        ) ?? 0;
      }

      const addTrackDialog = dialogRef.current?.querySelector(
        '.field-name-audioTracks .h5p-add-dialog.h5p-open'
      );
      const requiredHeightAddTrackDialog = (addTrackDialog) ?
        addTrackDialog.getBoundingClientRect().height +
          addTrackDialog.offsetTop +
          addTrackDialog.parentNode.offsetTop +
          paddingBottom :
        0;

      const editCopyrightDialog = dialogRef.current?.querySelector(
        '.field-name-audioTracks .h5p-editor-dialog.h5p-open'
      );
      const requiredHeightEditCopyrightDialog = (editCopyrightDialog) ?
        editCopyrightDialog.getBoundingClientRect().height +
          editCopyrightDialog.offsetTop +
          paddingBottom -
          32 : // margin difference that's not being computed here
        0;

      const dialogHeight = dialogRef.current?.getBoundingClientRect().height ?? 0;

      return Math.max(
        requiredHeightAddTrackDialog,
        requiredHeightEditCopyrightDialog,
        dialogHeight
      );
    };

    window.requestAnimationFrame(() => {
      if (!overlayRef.current || !dialogRef.current) {
        return;
      }

      const requiredHeight = computeRequiredHeight();

      // Dialog size keeping absolutely positioned children in check
      dialogRef.current.style.height = `${requiredHeight}px`;

      // Overlay containing dialog
      const totalHeight = 2 * dialogRef.current.offsetTop + requiredHeight;
      overlayRef.current.style.height = `max(${totalHeight}px, 100%)`;

      // Inform parents to resize
      props.resize?.();
    });
  };

  /*
   * Establish mutation observer for dialog in order to keep track of changes in
   * related editor form.
   */
  window.requestAnimationFrame(() => {
    if (!dialogRef.current) {
      return;
    }

    const mutationObserverAddDialog = new MutationObserver((mutationList) => {
      // Ignore changes in dialog reference itself (style.height)
      const isRelevantTarget = [...mutationList].filter((item) => {
        return item.target !== dialogRef.current;
      }).length > 0;

      if (!isRelevantTarget) {
        return;
      }

      resize();
    });

    mutationObserverAddDialog.observe(dialogRef.current, { attributes: true, subtree: true });

    props.resize?.();
  });

  return (
    <div className='h5p-editing-overlay' ref={overlayRef}>
      <div className='h5p-editing-dialog' ref={dialogRef}>
        <div className='h5p-editing-dialog-header'>
          <div className={titleClasses.join(' ')}
          >{props.title || ''}</div>
          <div className='h5p-editing-dialog-button-row'>
            <button
              className='remove-button'
              onClick={props.removeAction.bind(this)}
            >{props.removeLabel}</button>
            <button
              className='done-button'
              onClick={props.doneAction.bind(this)}
            >{props.doneLabel}</button>
          </div>
        </div>
        <div className='h5p-editing-dialog-body'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

EditingDialog.propTypes = {
  titleClasses: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  removeAction: PropTypes.func.isRequired,
  doneAction: PropTypes.func.isRequired,
  children: PropTypes.node,
  removeLabel: PropTypes.string.isRequired,
  doneLabel: PropTypes.string.isRequired,
  resize: PropTypes.func
};

export default EditingDialog;
