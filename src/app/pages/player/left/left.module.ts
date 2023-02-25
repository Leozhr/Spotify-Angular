import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left.component';
import { NavegationComponent } from './navegation/navegation.component';
import { PlayerRoutingModule } from '../player.routes';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [LeftComponent, NavegationComponent, PlaylistComponent],
  imports: [CommonModule, PlayerRoutingModule],
  exports: [LeftComponent],
})
export class LeftModule {}
