/** @constant {object} AUDIO_PLAYER_TYPES Valid audio types. */
export const AUDIO_PLAYER_TYPES = {
  interaction: 0,
  video: 1,
  playlist: 2,
  global: 2, // Same as playlist
  scene: 3
};

/**
 * Fade audio out by .1 every 25 milliseconds.
 * @param {HTMLAudioElement} player Audio player.
 * @param {boolean} [resetCurrentTime] If true, reset player to start position when done.
 * @param {function} [fadeInAudio] Audio fade in function.
 */
const fadeAudioOut = (player, resetCurrentTime, fadeInAudio) => {
  if (player.volume > 0) {
    player.volume = Number(player.volume - 0.1).toFixed(1);

    window.setTimeout(() => {
      fadeAudioOut(player, resetCurrentTime, fadeInAudio);
    }, 25);
  }
  else {
    player.volume = 0;
    player.pause();

    if (resetCurrentTime) {
      player.currentTime = 0;
    }

    // Fade in new player if configured
    fadeInAudio?.();
  }
};

/**
 * Fade audio in by .1 every 25 milliseconds.
 * @param {HTMLAudioElement} player Audio player.
 * @param {boolean} [startAtSilence] If true, can set volume to 0 before fading.
 */
const fadeAudioIn = (player, startAtSilence = false) => {
  if (player.volume === 1 && startAtSilence) {
    player.volume = 0;
  }

  if (player.volume >= 1) {
    return;
  }

  if (player.volume === 0 && startAtSilence) {
    player.play();
  }

  player.volume = Number(player.volume + 0.1).toFixed(1);

  if (player.volume !== 1) {
    window.setTimeout(() => {
      fadeAudioIn(player, false);
    }, 25);
  }
};

/**
 * Help create the audio player and find the approperiate source.
 * @param {number} contentId Content ID.
 * @param {object[]} sources H5P Audio sources.
 * @param {function} [onPlay] Callback, run when the track plays.
 * @param {function} [onEnd] Callback, run when the track ends.
 * @param {function} [onStop] Callback, run when the player is paused.
 * @param {boolean} [loop] If true, loop track.
 * @returns {HTMLAudioElement} Audio element.
 */
export const createAudioPlayer = (
  contentId,
  sources = [],
  onPlay,
  onEnd,
  onStop,
  loop = false
) => {
  // Check if browser supports audio.
  let player = document.createElement('audio');
  if (player.canPlayType) {
    // Add supported source files.
    sources
      .filter((source) => player.canPlayType(source.mime))
      .forEach((source) => {
        const sourceElement = document.createElement('source');
        sourceElement.src = H5P.getPath(source.path, contentId);
        sourceElement.type = source.mime;
        player.appendChild(sourceElement);
      });
  }

  if (player.children.length < 1) {
    player = null; // No sources are supported
  }
  else {
    player.controls = false;
    player.preload = 'auto';
    player.loop = loop;
    player.addEventListener('play', () => {
      onPlay?.();
    });
    player.addEventListener('ended', () => {
      onEnd?.();
    });
    player.addEventListener('pause', () => {
      onStop?.();
    });
  }

  return player;
};

/**
 * Determine type of audio player.
 * @param {string} id Id of player.
 * @returns {number|null} Type of audio player as mapped in AUDIO_PLAYER_TYPES or null.
 */
export const getAudioPlayerType = (id) => {
  if (typeof id !== 'string') {
    return null;
  }

  return AUDIO_PLAYER_TYPES[id.split('-').shift()] ?? null;
};

/**
 * Determine if ID of player belongs to scene audio track.
 * @param {string} id Id of player.
 * @returns {boolean} If true, player belongs to scene audio track.
 */
export const isInteractionAudio = (id) => id?.indexOf('interaction-') === 0;

/**
 * Determine if ID of player belongs to video interaction.
 * @param {string} id Id of player.
 * @returns {boolean} If true, player belongs to scene video interaction.
 */
export const isVideoAudio = (id) => id?.indexOf('video-') === 0;

/**
 * Determine if ID of player belongs to playlist.
 * @param {string} id Id of player.
 * @returns {boolean} If true, player belongs to playlist.
 */
export const isPlaylistAudio = (id) => {
  return id === 'global' || id?.indexOf('playlist-') === 0;
};

/**
 * Determine if the ID of the player belongs to a scene audio track.
 * @param {string} id Id of player.
 * @returns {boolean} If true, player belongs to scene.
 */
export const isSceneAudio = (id) => {
  return id?.indexOf('scene-') === 0;
};

/**
 * Determine whether the playerIsFading or not.
 * @param {HTMLAudioElement} player Player.
 * @returns {boolean} True, if player is fading in/out. Else false.
 */
export const playerIsFading = (player) => {
  return player.volume > 0 && player.volume < 1;
};

/**
 * Fade out player and start new one.
 * @param {HTMLAudioElement} oldPlayer Old player.
 * @param {HTMLAudioElement} newPlayer New player.
 * @param {boolean} resetCurrentTime True to reset old player to start position.
 */
export const fadeAudioInAndOut = (oldPlayer, newPlayer, resetCurrentTime) => {
  // Fade out old player
  if (oldPlayer && !newPlayer) {
    // Check that the player is not already fading
    if (!playerIsFading(oldPlayer)) {
      fadeAudioOut(oldPlayer, resetCurrentTime, null);
    }
  }
  // Fade out old player, then fade in new player
  else if (oldPlayer && newPlayer) {
    // Check that the players are not already fading
    if (!playerIsFading(oldPlayer) && !playerIsFading(newPlayer)) {
      fadeAudioOut(
        oldPlayer,
        resetCurrentTime,
        () => {
          fadeAudioIn(newPlayer, true);
        }
      );
    }
  }

  // Fade in new player
  else if (!oldPlayer && newPlayer) {
    // Check that the player is not already fading
    if (!playerIsFading(newPlayer)) {
      fadeAudioIn(newPlayer, true);
    }
  }
};
