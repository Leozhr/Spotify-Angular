import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  condition: boolean = false;

  modal() {
    this.condition = !this.condition;
  }
}
