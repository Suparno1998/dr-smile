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
  ngOnInit(){
  }
  
}
