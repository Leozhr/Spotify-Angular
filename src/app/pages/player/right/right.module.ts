import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right.component';
import { UserComponent } from './user/user.component';
import { BannerComponent } from './banner/banner.component';
import { SwiperModule } from 'swiper/angular';
import { RecentlyComponent } from './recently/recently.component';

@NgModule({
  declarations: [RightComponent, UserComponent, BannerComponent, RecentlyComponent],
  imports: [CommonModule, SwiperModule],
  exports: [RightComponent],
})
export class RightModule {}
