import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sharedEnvironment } from '../../environments/base';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getTweets() {
    console.log(sharedEnvironment);
  }
}
