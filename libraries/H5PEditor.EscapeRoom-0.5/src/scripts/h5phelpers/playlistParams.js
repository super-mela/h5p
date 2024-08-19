import { PlaylistEditingType } from '@scripts/playlist-widget/widget-components/PlaylistEditor.js';

/** @typedef {{ playlistId: string, title: string, audioTracks: object }} Playlist */

/**
 * Get playlist from id.
 * @param {Playlist[]} playlists Playlists.
 * @param {string} playlistId Playlist id.
 * @returns {Playlist} Playlist.
 */
export const getPlaylistFromId = (playlists, playlistId) => {
  return playlists.find((playlist) => {
    return playlist.playlistId === playlistId;
  });
};

/**
 * Updates playlist within parameters.
 * @param {Playlist[]} playlists Playlists.
 * @param {object} params Parameters.
 * @param {string} editingPlaylist Indicator for editing playlist.
 * @returns {Playlist[]} Playlists.
 */
export const updatePlaylist = (playlists, params, editingPlaylist = '') => {
  if (editingPlaylist === PlaylistEditingType.NEW_PLAYLIST) {
    playlists.push(params);
    return playlists;
  }

  return playlists.map((playlist) => {
    if (playlist.playlistId === editingPlaylist) {
      playlist = params;
    }

    return playlist;
  });
};
