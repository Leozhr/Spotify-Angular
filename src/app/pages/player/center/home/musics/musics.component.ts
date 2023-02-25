import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { Music } from 'src/app/interfaces/musics';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss'],
})
export class MusicsComponent implements OnInit, OnDestroy {
  musics: Music[] = [];
  musicActive: Music = newMusic();

  subs: Subscription[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.GetFavoriteMusics();
  }

  async GetFavoriteMusics() {
    this.musics = await this.spotifyService.SpotifyMusics();
  }

  async PlayMusic(music: Music) {
    await this.spotifyService.SpotifyPlay(music.id);
  }

  MusicPlayer() {
    const sub = this.playerService.musicPlayed.subscribe((music) => {
      this.musicActive = music;
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe);
  }
}
