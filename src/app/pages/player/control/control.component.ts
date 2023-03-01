import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { Music } from 'src/app/interfaces/musics';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit, OnDestroy {
  music: Music = newMusic();
  subs: Subscription[] = [];
  status: boolean = false;

  constructor(private playerService: PlayerService, private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.GetMusicPlayed();
  }

  NextMusic() {
    this.GetMusicPlayed();
    this.playerService.SetNextMusic();
  }

  ReturnMusic() {
    this.GetMusicPlayed();
    this.playerService.SetReturnMusic();
  }

  MusicControl() {
    this.status = !this.status;

    if (this.status) {
      this.playerService.SetPauseMusic();
    } else {
      this.playerService.SetStartMusic();
    }
  }

  GetMusicPlayed() {
    const sub = this.playerService.musicPlayed.subscribe((music) => {
      this.music = music;
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe);
  }
}
