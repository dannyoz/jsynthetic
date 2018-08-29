import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sharedEnvironment } from '../../environments/base';
import Twitter from 'twitter';

const Twit = new Twitter({
  consumer_key: sharedEnvironment.twitterConsumerKey,
  consumer_secret: sharedEnvironment.twitterConsumerSecret,
  access_token_key: sharedEnvironment.twitterAccessToken,
  access_token_secret: sharedEnvironment.twitterAccessTokenSecret
});

const params = {
  screen_name: 'JimmySynthetic'
};

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getTweets() {
    return Twit.get('statuses/user_timeline', params, (err, tweets, res) => {
      console.log(res);
      if(!err) return tweets
    })
  }
}
