import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getTweets() {
    return this.http.get(`${environment.serviceUrl}/twitter`);
  }

  getInstagram() {
    return this.http.get(`${environment.serviceUrl}/instagram`);
  }
}
