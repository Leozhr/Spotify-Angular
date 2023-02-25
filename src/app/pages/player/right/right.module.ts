import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [RightComponent, UserComponent],
  imports: [CommonModule],
  exports: [RightComponent],
})
export class RightModule {}
