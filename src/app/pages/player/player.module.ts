import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routes';
import { LeftModule } from './left/left.module';
import { RightModule } from './right/right.module';
import { HomeModule } from './center/home/home.module';
import { ControlModule } from './control/control.module';
import { MusicModule } from './center/music/music.module';
import { ThousandSeparatorPipe } from 'src/app/common/format.pipe';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, PlayerRoutingModule, LeftModule, RightModule, HomeModule, ControlModule, MusicModule],
})
export class PlayerModule {}
