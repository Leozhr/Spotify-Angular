import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { Music } from 'src/app/interfaces/musics';
import { Status } from 'src/app/interfaces/status';
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
  condition: Status = null;
  offset: boolean = true;

  constructor(private playerService: PlayerService, private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.GetMusicPlayed();
  }

  GetMusicPlayed() {
    const sub = this.playerService.musicPlayed.subscribe((music) => {
      this.music = music;
    });

    this.subs.push(sub);
  }

  NextMusic() {
    this.playerService.SetNextMusic();
  }

  ReturnMusic() {
    this.playerService.SetReturnMusic();
  }

  MusicControl() {
    this.status = !this.status;
    this.condition = this.spotifyService.status;

    if (this.status && this.condition.playing) {
      this.playerService.SetPauseMusic();
    } else if (!this.status && !this.condition.playing) {
      this.playerService.SetStartMusic();
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe);
  }
}
