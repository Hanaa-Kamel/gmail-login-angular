import { IUser } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


private _rootUrl : string = 'https://randomuser.me/api/';


  constructor(private http:HttpClient) {}
  
  getUser(): Observable<IUser[]>{
  return this.http.get<IUser[]>(this._rootUrl);
}

 
}
