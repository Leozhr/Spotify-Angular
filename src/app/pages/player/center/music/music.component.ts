import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { Music } from 'src/app/interfaces/musics';
import { Playlist } from 'src/app/interfaces/playlist';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit, OnDestroy {
  playlist: Playlist;
  musics: Music[];
  musicPlayer: Music = newMusic();
  subs: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.GetMusic();
    this.MusicPlayer();
  }

  GetMusic() {
    const sub = this.activatedRoute.paramMap.subscribe(async (params) => {
      const type = params.get('type');
      const id = params.get('id');
      await this.GetPageParams(type, id);
    });

    this.subs.push(sub);
  }

  async PlayMusic(music: Music) {
    await this.spotifyService.SpotifyPlay(music.id);
    this.playerService.GetMusicValid(music);
  }

  MusicPlayer() {
    const sub = this.playerService.musicPlayed.subscribe((music) => {
      this.musicPlayer = music;
    });

    this.subs.push(sub);
  }

  async GetPageParams(type: string, id: string) {
    if (type == 'playlist') await this.GetPlaylistType(id);
    else await this.GetArtistType(id);
  }

  async GetPlaylistType(playlistId: string) {
    this.playlist = await this.spotifyService.SpotifyPlaylistOnly(playlistId);
  }

  async GetArtistType(artist: string) {}

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
