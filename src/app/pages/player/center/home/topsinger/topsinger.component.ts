import { Component, OnInit } from '@angular/core';
import { NewSinger } from 'src/app/common/factories';
import { Singer } from 'src/app/interfaces/singer';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-topsinger',
  templateUrl: './topsinger.component.html',
  styleUrls: ['./topsinger.component.scss'],
})
export class TopsingerComponent implements OnInit {
  singer: Singer = NewSinger();

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.GetSinger();
  }

  async GetSinger() {
    const TopSinger = await this.spotifyService.SpotifyTopSinger(6);

    if (!!TopSinger) this.singer = TopSinger.pop();
  }
}
