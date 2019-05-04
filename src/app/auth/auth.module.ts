import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authRouting } from './auth.routing'
import {AuthauthenticationService  } from './services/authauthentication.service';



import {AuthComponent, RegisterComponent, LoginComponent} from './components'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    authRouting
  ],
  providers: [AuthauthenticationService],
  declarations: [RegisterComponent, LoginComponent, AuthComponent]
})
export class AuthModule { }
