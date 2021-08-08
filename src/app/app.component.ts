import { Component} from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dr-smile';
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
}
