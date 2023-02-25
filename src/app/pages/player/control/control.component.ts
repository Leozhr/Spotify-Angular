import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { porcentage } from 'src/app/common/porcentage';
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
  timer: any;
  convert = new porcentage();
  bar: number = 0;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.GetMusicPlayed();
    this.BarProgress();
  }

  BarProgress() {
    let counter = 0;
    this.timer = setInterval(() => {
      counter += 1000;
      this.bar = this.convert.result(counter, this.music.timeMs);
      console.log(this.bar);
    }, 500);
  }

  GetMusicPlayed() {
    const sub = this.playerService.musicPlayed.subscribe((music) => {
      this.music = music;
    });

    this.subs.push(sub);
  }

  NextMusic() {
    this.playerService.SetNextMusic();
    clearInterval(this.timer);
    this.BarProgress();
  }

  ReturnMusic() {
    this.playerService.SetReturnMusic();
    clearInterval(this.timer);
    this.BarProgress();
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
