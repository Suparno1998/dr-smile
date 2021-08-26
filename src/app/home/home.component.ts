import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import Swal from 'sweetalert2'
declare var $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  divisor: any;
  slider: any;
  rating = 0
  feedback : string = ""
  name : string = ""
  date = null
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
  }
  openMember(){
    $('#membershipModal').modal('show')
  }
  openOffer(){
    $('#offerModal').modal('show')
  }
  closeMember(){
    $('#membershipModal').modal('hide')
  }
  closeOffer(){
    $('#offerModal').modal('hide')
  }
  moveDivisor() { 
    this.divisor.style.width = this.slider.value+"%";
  }
  openFormModal(){
    this.rating = 0
    this.name = ""
    this.feedback = ""
    this.date = null
    $('#feedbackformmodal').modal('show')
  }
  closeFormModal(){
    $('#feedbackformmodal').modal('hide')
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
  submitFeedbackForm(e){
    e.preventDefault()
    if(this.rating === 0){
      Swal.fire({
        title : "Field Empty",
        text : "Please fill the rating field to submit form",
        "showConfirmButton" : false,
        icon : "warning",
        showCloseButton : true,
        showCancelButton : true,
      })
      this.closeFormModal()
    }
    else{
      var obj = {
        name : this.name === "" ? "Anonymous" : this.name,
        date : this.date === null ? "NA" : this.date,
        feedback : this.feedback == "" ? "NA" : this.feedback,
        rating : this.rating,
        activeFlag : null
      }
      this.service.submitFeedback(obj).then(v => {
        console.log(v.id)

        if(v.id){
          Swal.fire({
            title : "Successful",
            text : "Your feedback has been successfully noted, Thank you for your valuable time. Looking forward to serving you again",
            showConfirmButton : false,
            showCloseButton : true,
            icon : "success",
            showCancelButton : false,
          })
        }
        else{
          Swal.fire({
            title : "Oops",
            text : "Your feedback could not be submitted.Please try again later",
            showConfirmButton : false,
            showCloseButton : true,
            icon : "error",
            showCancelButton : false,
          })
        }
      })
      this.closeFormModal()
    }
  }
}
