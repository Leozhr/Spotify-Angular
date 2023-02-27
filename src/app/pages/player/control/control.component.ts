import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { Music } from 'src/app/interfaces/musics';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit, OnDestroy {
  music: Music = newMusic();
  subs: Subscription[] = [];
  status: boolean = false;

  constructor(private playerService: PlayerService) {}

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

    if (this.status) {
      this.playerService.SetPauseMusic();
    } else {
      this.playerService.SetStartMusic();
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe);
  }
}
