import PropTypes from 'prop-types';
import { SceneTypes } from '@components/Scene/Scene.js';
import { InteractionEditingType } from '@components/EditingDialog/InteractionEditor.js';

export const sceneType = PropTypes.shape({
  sceneType: PropTypes.oneOf(Object.values(SceneTypes)).isRequired,
  scenename: PropTypes.string.isRequired,
  scenesrc: PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired
});

export const editingSceneType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf(Object.values(InteractionEditingType)),
]);
