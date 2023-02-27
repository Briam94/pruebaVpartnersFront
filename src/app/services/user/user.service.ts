import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  login(user: UserModel) {
    return this.http.post(this.url + 'users/login', user);
  }

  addUser(user: UserModel) {
    return this.http.post(this.url + 'users/addUser', user);
  }
}
