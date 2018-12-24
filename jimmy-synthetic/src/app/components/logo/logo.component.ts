import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  providers: [AppService]
})
export class LogoComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getTweets().subscribe((data) => {
      console.log(data);
    });
  }

}
