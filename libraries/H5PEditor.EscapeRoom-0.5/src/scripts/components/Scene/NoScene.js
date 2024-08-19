import React from 'react';
import { H5PContext } from '@context/H5PContext.js';
import './NoScene.scss';

export default class NoScene extends React.Component {
  /**
   * React render function.
   * @returns {object} JSX element.
   */
  render() {
    return (
      <div className='no-scene-container'>
        <div className="no-scene-wrapper">
          <div className="title">{ this.context.t('noScenesTitle') }</div>
          <div className="description">{ this.context.t('noScenesDescription') }</div>
        </div>
      </div>
    );
  }
}

NoScene.contextType = H5PContext;
