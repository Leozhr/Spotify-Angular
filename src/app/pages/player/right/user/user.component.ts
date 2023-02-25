import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = null;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.spotifyService.user;
  }

  loggout() {
    localStorage.clear();
    window.location.reload();
  }
}
