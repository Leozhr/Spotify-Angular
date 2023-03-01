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
      try {
        this.GetMusicPlayer();
      } catch (error) {
        clearInterval(this.timer);
      }
    }, 2500);
  }

  async GetMusicPlayer() {
    const music = await this.spotifyService.SpotifyState();
    this.GetMusicValid(music);
  }

  async SetNextMusic() {
    try {
      await this.spotifyService.SpotifyNext();
    } catch (error) {}
  }

  async SetReturnMusic() {
    try {
      await this.spotifyService.SpotifyReturn();
    } catch (error) {}
  }

  async SetPauseMusic() {
    await this.spotifyService.SpotifyPause();
  }

  async SetStartMusic() {
    await this.spotifyService.SpotifyStart();
  }

  GetMusicValid(music: Music) {
    this.musicPlayed.next(music);
  }
}
