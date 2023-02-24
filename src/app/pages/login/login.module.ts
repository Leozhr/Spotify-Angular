import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MovieRoutingModule } from './login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MovieRoutingModule],
})
export class LoginModule {}
