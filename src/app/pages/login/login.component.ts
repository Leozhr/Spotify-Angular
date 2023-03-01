import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.TokenVerification();
  }

  TokenVerification() {
    const token = this.spotifyService.UrlTokenCallback();
    if (!!token) {
      this.spotifyService.UrlAccessToken(token);
      this.router.navigate(['/auth']);
    }
  }

  Redirect() {
    window.location.href = this.spotifyService.UrlToken();
  }
}
