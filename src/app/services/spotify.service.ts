import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { User } from '../interfaces/user';
import { GetSpotifyPlaylist, SpotifyProfile } from '../common/spotifyHelper';
import { Playlist } from '../interfaces/playlist';

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

  async SpotifyPlaylist(offset = 0, limit = 5): Promise<Playlist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, {
      offset,
      limit,
    });
    return playlists.items.map(GetSpotifyPlaylist);
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
