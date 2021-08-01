import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $ : any
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services : any[] = []
  slider  : any
  divisor : any
  constructor(private service : DataService){ }
  async ngOnInit(){
    //console.log(this.service.listOfServices.length)
    if(this.service.listOfServices.length > 0){
      this.services = this.service.listOfServices
      console.log('data present')
    }
    else{
      this.services = await this.service.getData()
      console.log('data api called')
    }
  }
  
}
