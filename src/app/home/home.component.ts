import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Swal from 'sweetalert2'
declare var $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  divisor: any;
  slider: any;
  queryForm = {
    Name  : "",
    Mobile : "",
    Email : "",
    Message : "Get a call from us",
  }
  cond : boolean;
  constructor(private service : DataService) { }
  latest : boolean = true;
  
  async ngOnInit(){
    this.divisor = document.getElementById("divisor")
    this.slider = document.getElementById("slider");
    await this.service.getNews();
    this.service.latestFlag.subscribe(v => {
      this.latest = v
    })
  }
  openModal(){
    console.log('test')
    $('#membershipModal').modal('show')
  }
  offerModal(){
    console.log('test')
    $('#offerModal').modal('show')
  }
  moveDivisor() { 
    this.divisor.style.width = this.slider.value+"%";
  }
  ValidateEmail(mail : string) 
  {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
      return true
    }
      return false
  }
  ValidateMobile(phno : string)
  {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phno.match(phoneno)){
      return true
    }
    else{
      return false;
    }
  }
  submitQuery(){
    if(!this.cond){
      this.alert("Warning","Please agree to terms and conditions before clicking on submit","warning")
      return
    }
    if(this.queryForm.Name === ""){
      this.alert("Empty field","Name field cannot be empty","error")
      return
    }
    else if(this.queryForm.Mobile === ""){
      this.alert("Empty field","Mobile number cannot be empty","error")
    }
    else if(this.queryForm.Email === ""){
      this.alert("Empty field","Email field cannot be empty","error")
      return
    }
    else if(this.ValidateEmail(this.queryForm.Email) == false){
      this.alert("Email Error","Please enter a valid email before submitting","error")
      return
    }
    else if(this.ValidateMobile(this.queryForm.Mobile) == false){
      this.alert("Mobile Error","Please enter a valid mobile number before submitting","error")
      return
    }
    else{
      this.queryForm['type'] = 'leads'
      let params = new URLSearchParams(this.queryForm).toString();
      console.log(params)
      this.service.submitForm(params).subscribe(response => {
        if(response["result"] === "success"){
          this.alert("Thank you","We'll get back to you as soon as possible","success")
        }
      })
    }
  }
  alert(title,text,type){
    Swal.fire({
      title : title,
      text : text,
      icon : type,
      showCancelButton : false,
      showConfirmButton : false
    })
  }
  check(){
    this.cond = !this.cond
  }
}
