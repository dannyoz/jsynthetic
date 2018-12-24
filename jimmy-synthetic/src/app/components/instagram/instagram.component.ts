import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  feed = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getInstagram().subscribe(data => {
      console.log(data);
    });
  }

}
