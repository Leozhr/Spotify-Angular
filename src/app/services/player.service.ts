import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newMusic } from '../common/factories';
import { Music } from '../interfaces/musics';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  musicPlayed = new BehaviorSubject<Music>(newMusic());
  timer: any = null;

  constructor(private spotifyService: SpotifyService) {
    this.SpotifyTimeout();
  }

  async SpotifyTimeout() {
    clearTimeout(this.timer);
    this.timer = setInterval(async () => {
      this.GetMusicPlayer();
      this.GetPlaybackMusic();
    }, 500);
  }

  async GetMusicPlayer() {
    const music = await this.spotifyService.SpotifyState();
    this.GetMusicValid(music);
    await this.GetMusicPlayer();
  }

  async SetNextMusic() {
    await this.spotifyService.SpotifyNext();
  }

  async SetReturnMusic() {
    await this.spotifyService.SpotifyReturn();
  }

  async SetPauseMusic() {
    await this.spotifyService.SpotifyPause();
  }

  async GetPlaybackMusic() {
    await this.spotifyService.SpotifyPlayback();
  }

  async SetStartMusic() {
    await this.spotifyService.SpotifyStart();
  }

  GetMusicValid(music: Music) {
    this.musicPlayed.next(music);
  }
}
