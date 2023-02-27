import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  condition: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/player/home']);
  }

  modal() {
    this.condition = !this.condition;
  }
}
