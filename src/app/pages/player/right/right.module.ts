import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right.component';
import { UserComponent } from './user/user.component';
import { BannerComponent } from './banner/banner.component';
import { ThousandSeparatorPipe } from 'src/app/common/format.pipe';
import { RecentlyComponent } from './recently/recently.component';

@NgModule({
  declarations: [RightComponent, UserComponent, BannerComponent, RecentlyComponent, ThousandSeparatorPipe],
  imports: [CommonModule],
  exports: [RightComponent],
})
export class RightModule {}
