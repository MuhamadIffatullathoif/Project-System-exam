import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public addUser(user: any) {
    return this.httpClient.post(`${this.baseUrl}/user/`, user);
  }
}
