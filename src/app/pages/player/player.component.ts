import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { Music } from 'src/app/interfaces/musics';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  music: Music = newMusic();
  subs: Subscription[] = [];
  auth: boolean = false;
  condition: boolean = false;

  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.GetMusicPlayed();
    this.router.navigate(['/player/home']);
  }

  GetMusicPlayed() {
    const sub = this.playerService.musicPlayed.subscribe((music) => {
      this.music = music;
    });

    this.subs.push(sub);
  }

  modal() {
    this.condition = !this.condition;
  }

  ngOnDestroy(): void {
    this.subs.forEach((x) => x.unsubscribe);
  }
}
