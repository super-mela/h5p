import React from 'react';
import PropTypes from 'prop-types';
import './SceneSelectorSubmenu.scss';

/**
 * @param {object} props React props.
 * @returns {object} JSX element.
 */
const SceneSelectorSubmenu = (props) => {
  const handleClick = (event, type) => {
    event.stopPropagation();
    props[type]();
  };

  return (
    <div className='scene-selector-submenu'>
      <button
        className='set-start-scene'
        disabled={props.isStartScene}
        onClick={ (event, ) => {
          handleClick(event, 'setStartScene');
        } }
      >
        <div className='tooltip'>{props.setStartingSceneLabel}</div>
      </button>
      <button
        className='jump'
        onClick={ (event) => {
          handleClick(event, 'onJump');
        } }
      >
        <div className='tooltip'>{props.goToSceneLabel}</div>
      </button>
      <button
        className='edit'
        onClick={ (event) => {
          handleClick(event, 'onEdit');
        } }
      >
        <div className='tooltip'>{props.editLabel}</div>
      </button>
      <button
        className='clone'
        onClick={ (event) => {
          handleClick(event, 'onClone');
        } }
      >
        <div className='tooltip'>{props.cloneLabel}</div>
      </button>
      <button
        className='delete'
        onClick={ (event) => {
          handleClick(event, 'onDelete');
        } }
      >
        <div className='tooltip'>{props.deleteLabel}</div>
      </button>
    </div>
  );
};

SceneSelectorSubmenu.propTypes = {
  isStartScene: PropTypes.bool.isRequired,
  setStartScene: PropTypes.func.isRequired,
  onJump: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onClone: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  setStartingSceneLabel: PropTypes.string.isRequired,
  goToSceneLabel: PropTypes.string.isRequired,
  editLabel: PropTypes.string.isRequired,
  cloneLabel: PropTypes.string.isRequired,
  deleteLabel: PropTypes.string.isRequired
};

export default SceneSelectorSubmenu;
