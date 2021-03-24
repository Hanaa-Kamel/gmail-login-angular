import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
 
} from 'angularx-social-login';
import { IUser } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Get User
  user_url: IUser[];
  stringJson: any;
  stringObject: any;

//User Login
   user : SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(private authService: SocialAuthService, private userService: UserService) { 
   
  }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      console.log(user);
      this.user = user;
    });
// ----------------------
    this.userService.getUser().subscribe(user_url=>{
      // user_url=> this.user_url= user_url
    
      this.user_url = user_url
      // console.log(user_url)
      this.stringJson = JSON.stringify(this.user_url);
      this.stringObject = JSON.parse(this.stringJson);
      this.user_url = this.stringObject.results[0];
      console.log("JSON object -",  this.user_url);
    })
   
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

 

  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }


}
