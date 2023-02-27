import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { DeviceGuard } from './guards/device.guard';
import { IncompatibleComponent } from './pages/incompatible/incompatible.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'player' },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
    canLoad: [DeviceGuard],
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((m) => m.PlayerModule),
    canLoad: [AuthenticatedGuard],
  },
  {
    path: 'incompatible',
    component: IncompatibleComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'player/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
