import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.GetPlaylist();
  }

  async GetPlaylist() {
    this.playlists = await this.spotifyService.SpotifyPlaylist();
  }
}
