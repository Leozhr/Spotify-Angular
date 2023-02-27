import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Device } from 'src/app/common/device';
import { Singer } from 'src/app/interfaces/singer';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  singer: Singer[];
  test = new Device();

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.GetSinger();
    console.log(this.test.type());
  }

  async GetSinger() {
    this.singer = await this.spotifyService.SpotifyTopSinger(5);
  }
}
