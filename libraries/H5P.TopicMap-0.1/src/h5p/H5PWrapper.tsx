import type { H5PExtras, IH5PContentType } from 'h5p-types';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { L10nContext } from 'use-h5p';
import { App } from '../components/App/App';
import { ContentIdContext } from '../contexts/ContentIdContext';
import { H5PContext } from '../contexts/H5PContext';
import { Params } from '../types/Params';
import { sanitizeRecord } from '../utils/h5p.utils';
import { getEmptyParams } from '../utils/semantics.utils';
import { defaultTranslations } from '../constants/defaultTranslations';
import {
  H5P,
  normalizeArrowDialogAudioPaths,
  normalizeArrowItemPaths,
  normalizeDialogAudioPaths,
  normalizeGridBackgroundImagePath,
  normalizeSizes,
  normalizeTopicMapItemPaths,
} from './H5P.util';

export class H5PWrapper extends H5P.EventDispatcher implements IH5PContentType {
  public containerElement: HTMLElement | undefined;

  private wrapper: HTMLElement;

  private isIPhoneFullscreenActive: boolean;

  private toggleIPhoneFullscreen: () => void;

  private observer: IntersectionObserver;

  constructor(params: Params, contentId: string, extras?: H5PExtras) {
    super();

    this.isIPhoneFullscreenActive = false;

    this.toggleIPhoneFullscreen = () => {
      this.isIPhoneFullscreenActive = !this.isIPhoneFullscreenActive;
      document.body.style.overflow = this.isIPhoneFullscreenActive
        ? 'hidden'
        : 'auto';
      const topicMapContainer = document.querySelector('.h5p-topic-map');
      if (this.isIPhoneFullscreenActive) {
        topicMapContainer?.classList.add('iPhoneFullscreenStyle');
      }
      else {
        topicMapContainer?.classList.remove('iPhoneFullscreenStyle');
      }
    };

    this.wrapper = H5PWrapper.createWrapperElement();

    let paramsWithFallbacks: Required<Params> = {
      ...getEmptyParams(),
      ...params,
    };

    paramsWithFallbacks = normalizeTopicMapItemPaths(
      paramsWithFallbacks,
      contentId,
    );

    paramsWithFallbacks = normalizeArrowItemPaths(
      paramsWithFallbacks,
      contentId,
    );

    paramsWithFallbacks = normalizeGridBackgroundImagePath(
      paramsWithFallbacks,
      contentId,
    );

    paramsWithFallbacks = normalizeDialogAudioPaths(
      paramsWithFallbacks,
      contentId,
    );

    paramsWithFallbacks = normalizeArrowDialogAudioPaths(
      paramsWithFallbacks,
      contentId,
    );

    paramsWithFallbacks = normalizeSizes(paramsWithFallbacks);

    const l10n = sanitizeRecord({ ...defaultTranslations, ...params.l10n });
    const title = extras?.metadata.title;

    this.on('enterFullScreen', () => {
      setTimeout(() => {
        this.trigger('resize');
      }, 250); // DOM might need time to change size
    });

    this.on('exitFullScreen', () => {
      setTimeout(() => {
        this.trigger('resize');
      }, 250); // DOM might need time to change size
    });

    // React components require 'resize' once H5P container attached to DOM
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio === 1) {
          this.observer.unobserve(this.containerElement as Element); // Only need instantiate once.
          window.requestAnimationFrame(() => {
            this.trigger('resize');
          });
        }
      },
      {
        root: document.documentElement,
        threshold: [1],
      },
    );

    createRoot(this.wrapper).render(
      <ContentIdContext.Provider value={contentId}>
        <L10nContext.Provider value={l10n}>
          <H5PContext.Provider value={this}>
            <App
              params={paramsWithFallbacks}
              title={title}
              toggleIPhoneFullscreen={this.toggleIPhoneFullscreen}
              instance={this}
            />
          </H5PContext.Provider>
        </L10nContext.Provider>
      </ContentIdContext.Provider>,
    );
  }

  /**
   * Toggle fullscreen button.
   * @param {string|boolean} state enter|false for enter, exit|true for exit.
   */
  handleToggleFullscreen(state?: string | boolean): void {
    if (!this.containerElement) {
      return;
    }

    let newState: boolean | undefined;
    if (typeof state === 'string') {
      if (state === 'enter') {
        newState = false;
      }
      else if (state === 'exit') {
        newState = true;
      }
    }

    if (typeof newState !== 'boolean') {
      newState = !H5P.isFullscreen;
    }

    if (newState === true) {
      H5P.fullScreen(H5P.jQuery(this.containerElement), this);
    }
    else {
      H5P.exitFullScreen();
    }
  }

  attach($container: JQuery<HTMLElement>): void {
    this.containerElement = $container.get(0);
    if (!this.containerElement) {
      console.error(
        'Found no containing element to attach `h5p-topic-map` to.',
      );
      return;
    }

    this.containerElement.appendChild(this.wrapper);
    this.containerElement.classList.add('h5p-topic-map');

    this.observer.observe(this.containerElement as Element);
  }

  private static createWrapperElement(): HTMLDivElement {
    return document.createElement('div');
  }
}
