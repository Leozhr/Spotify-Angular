import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routes';
import { LeftModule } from './left/left.module';
import { RightModule } from './right/right.module';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, PlayerRoutingModule, LeftModule, RightModule],
})
export class PlayerModule {}
