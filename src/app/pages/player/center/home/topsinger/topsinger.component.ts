import { Component, OnInit } from '@angular/core';
import { NewSinger } from 'src/app/common/factories';
import { Music } from 'src/app/interfaces/musics';
import { Singer } from 'src/app/interfaces/singer';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-topsinger',
  templateUrl: './topsinger.component.html',
  styleUrls: ['./topsinger.component.scss'],
})
export class TopsingerComponent implements OnInit {
  singer: Singer = NewSinger();

  constructor(private spotifyService: SpotifyService, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.GetSinger();
  }

  async GetSinger() {
    const TopSinger = await this.spotifyService.SpotifyTopSinger(13);

    if (!!TopSinger) this.singer = TopSinger.pop();
  }

  async PlayMusic(music: Music) {
    await this.spotifyService.SpotifyPlay(music.id);
    this.playerService.GetMusicValid(music);
  }
}
