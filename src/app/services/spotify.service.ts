import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { User } from '../interfaces/user';
import {
  GetSpotifyPlaylist,
  GetSpotifyPlaylistOnly,
  GetSpotifySinger,
  GetSpotifyTrack,
  SpotifyProfile,
} from '../common/spotifyHelper';
import { Playlist } from '../interfaces/playlist';
import { Singer } from '../interfaces/singer';
import { Music } from '../interfaces/musics';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: User;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async initUser() {
    if (!!this.user) return true;

    const token = localStorage.getItem('token');

    if (!token) return false;

    try {
      this.UrlAccessToken(token);
      await this.SpotifyUser();
      return !!this.user;
    } catch (ex) {
      return false;
    }
  }

  async SpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyProfile(userInfo);
  }

  async SpotifyPlaylist(offset = 0, limit = 6): Promise<Playlist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, {
      offset,
      limit,
    });

    return playlists.items.map(GetSpotifyPlaylist);
  }

  async SpotifyPlaylistOnly(playlistId: string, offset = 0, limit = 50) {
    const playlist = await this.spotifyApi.getPlaylist(playlistId);

    if (!playlist) return null;

    const playlistOnly = GetSpotifyPlaylistOnly(playlist);
    const musics = await this.spotifyApi.getPlaylistTracks(playlistId, {
      offset,
      limit,
    });

    playlistOnly.musics = await musics.items.map((music) => GetSpotifyTrack(music.track as SpotifyApi.TrackObjectFull));

    return playlistOnly;
  }

  async SpotifyTopSinger(limit = 6): Promise<Singer[]> {
    const singer = await this.spotifyApi.getMyTopArtists({ limit });
    return singer.items.map(GetSpotifySinger);
  }

  async SpotifyMusics(offset = 0, limit = 20): Promise<Music[]> {
    const musics = await this.spotifyApi.getMySavedTracks({ offset, limit });
    return musics.items.map((x) => GetSpotifyTrack(x.track));
  }

  async SpotifyPlay(MusicID: string) {
    await this.spotifyApi.queue(MusicID);
    await this.spotifyApi.skipToNext();
  }

  async SpotifyNext() {
    await this.spotifyApi.skipToNext();
  }

  async SpotifyReturn() {
    await this.spotifyApi.skipToPrevious();
  }

  async SpotifyPause() {
    if ((await this.spotifyApi.getMyCurrentPlaybackState()).is_playing == true) await this.spotifyApi.pause();
  }

  async SpotifyStart() {
    if ((await this.spotifyApi.getMyCurrentPlaybackState()).is_playing == false) await this.spotifyApi.play();
  }

  async SpotifyState(): Promise<Music> {
    const music = await this.spotifyApi.getMyCurrentPlayingTrack();
    return GetSpotifyTrack(music.item);
  }

  UrlToken() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  UrlTokenCallback() {
    if (!window.location.hash) return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  UrlAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
