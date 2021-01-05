import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { ButtonComponent } from './button/button.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [EmailComponent, PasswordComponent, ButtonComponent, MainComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
