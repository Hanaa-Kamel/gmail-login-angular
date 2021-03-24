import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
const config: SocialAuthServiceConfig = {
    providers:[{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("785442160349-90etcbtmvs30h602pir4r7uffdj0ad5t.apps.googleusercontent.com")
  }]}
;
export function provideConfig(){
  return config;
}
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, SocialLoginModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
            ),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }