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
  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
  openOfferForm(){
    console.log("offer");
    window.location.href = "https://forms.gle/hDPpK1TQK9jSnk7B6"
  }
  openMemberForm(){
    console.log("member");
    
    window.location.href="https://forms.gle/hDPpK1TQK9jSnk7B6"
  }
}
