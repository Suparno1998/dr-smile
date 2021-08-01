import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  news : any[] = []
  constructor(private service : DataService) { }

  async ngOnInit(){
    if(this.service.news.length > 0){
      console.log('previous data');
      this.news = this.service.news
    }
    else{
      console.log('news api called');
      this.news = await this.service.getNews()
    }
    //console.log(this.news)
  }

}
