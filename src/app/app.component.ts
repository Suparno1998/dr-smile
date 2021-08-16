import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dr-smile';
  user : any = null
  constructor(private service : DataService,private router : Router){
  }
  openMember(){
    $('#appmembershipModal').modal('show')
  }
  openOffer(){
    $('#appofferModal').modal('show')
  }
  closeMember(){
    $('#appmembershipModal').modal('hide')
  }
  closeOffer(){
    $('#appofferModal').modal('hide')
  }
  onActivate(event) {
    console.log(event)
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
  openOfferForm(){
    window.location.href = "https://form.jotform.com/212220564002033"
  }
  openMemberForm(){
    window.location.href="https://form.jotform.com/212216404476046"
  }
  ngOnInit(){
    this.service.userSubject.subscribe(v => {
      this.user = v
    })
  }
  logout(){
    this.service.userSubject.next(null)
    this.router.navigateByUrl('/home')
  }
}
