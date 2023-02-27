import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './center/home/home.component';
import { MusicComponent } from './center/music/music.component';
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
      {
        path: 'music/:type/:id',
        component: MusicComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(PlayerRouter)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
