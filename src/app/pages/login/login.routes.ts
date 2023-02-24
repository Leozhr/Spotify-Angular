import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const LoginRouter: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(LoginRouter)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
