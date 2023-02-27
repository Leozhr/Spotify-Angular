import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/common/device';
import { Singer } from 'src/app/interfaces/singer';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-recently',
  templateUrl: './recently.component.html',
  styleUrls: ['./recently.component.scss'],
})
export class RecentlyComponent implements OnInit {
  singer: Singer[];
  test = new Device();

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.GetSinger();
  }

  async GetSinger() {
    this.singer = await this.spotifyService.SpotifyTopSinger(5);
  }
}
