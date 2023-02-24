import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';

const PlayerRouter: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  imports: [RouterModule.forChild(PlayerRouter)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
