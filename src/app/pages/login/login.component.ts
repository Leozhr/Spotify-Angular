import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpotifyService } from 'src/app/services/spotify.service';
import { SpotifyConfiguration } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hub: boolean;

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.forms();
    this.TokenVerification();
  }

  forms() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      token: ['', [Validators.required, Validators.minLength(25)]],
    });
  }

  TokenVerification() {
    const token = this.spotifyService.UrlTokenCallback();
    if (!!token) {
      this.spotifyService.UrlAccessToken(token);
      this.router.navigate(['/auth']);
    }
  }

  Redirect() {
    if (this.form.valid) {
      SpotifyConfiguration.clientId = this.form.value.token;
      window.location.href = this.spotifyService.UrlToken();
    } else {
      this.toastrService.error('Ops.. ocorreu um erro', 'ERROR', {
        timeOut: 3000,
      });
    }
  }

  modal() {
    this.hub = !this.hub;
  }
}
