import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './center/home/home.component';
import { PlayerComponent } from './player.component';

const PlayerRouter: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(PlayerRouter)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
