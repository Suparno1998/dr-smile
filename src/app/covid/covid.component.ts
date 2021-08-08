import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      title : "Vaccination",
      html: "<p>Get yourself vaccinated at the earliest opportunity. Book a slot at&nbsp;<a class='deep-orange' href='https://www.cowin.gov.in' target='_blank'>cowin.gov.in</a> and get yourself vaccinated today</p>",
      showCancelButton : false,
      showConfirmButton : false,
      showCloseButton : true,
    })
  }

}
