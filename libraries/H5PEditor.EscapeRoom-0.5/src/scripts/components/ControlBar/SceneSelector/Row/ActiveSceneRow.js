import PropTypes from 'prop-types';
import React from 'react';
import { sceneType } from '@types/types';
import { SceneTypes } from '@components/Scene/Scene.js';
import './ActiveSceneRow.scss';

/**
 * @param {object} props React props.
 * @returns {object} JSX element.
 */
const ActiveSceneRow = (props) => {
  if (!props.scene) {
    return (
      <div>{props.noScenesTitle}</div>
    );
  }
  const rowClasses = ['active-scene'];
  const { sceneType } = props.scene;
  const is3dScene = sceneType === SceneTypes.THREE_SIXTY_SCENE || sceneType === SceneTypes.PANORAMA_SCENE;
  if (is3dScene) {
    rowClasses.push('three-sixty');
  }

  return (
    <div className={rowClasses.join(' ')}>
      <div className='h5p-scene-denotation'>{props.currentSceneLabel}:</div>
      <div className='h5p-scene-name' dangerouslySetInnerHTML={ { __html: props.scene.scenename } }></div>
    </div>
  );
};

ActiveSceneRow.propTypes = {
  scene: sceneType,
  noScenesTitle: PropTypes.string.isRequired,
  currentSceneLabel: PropTypes.string.isRequired
};

export default ActiveSceneRow;
