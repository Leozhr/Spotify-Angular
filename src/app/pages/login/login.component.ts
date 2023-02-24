import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.TokenVerification();
  }

  TokenVerification() {
    const token = this.spotifyService.UrlTokenCallback();
    if (!!token) {
      this.spotifyService.UrlAccessToken(token);
    }
  }

  Redirect() {
    console.log(this.spotifyService.UrlToken());
  }
}
