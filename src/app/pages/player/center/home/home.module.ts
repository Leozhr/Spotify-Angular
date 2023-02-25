import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TopsingerComponent } from './topsinger/topsinger.component';
import { MusicsComponent } from './musics/musics.component';

@NgModule({
  declarations: [HomeComponent, TopsingerComponent, MusicsComponent],
  imports: [CommonModule],
})
export class HomeModule {}
