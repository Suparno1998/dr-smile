import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';
import moment from 'moment';
declare var $ : any
@Component({
  selector: 'app-check-reviews',
  templateUrl: './check-reviews.component.html',
  styleUrls: ['./check-reviews.component.css']
})
export class CheckReviewsComponent implements OnInit {
  reviews : any[] = []
  collectionSize = 0
  filteredReviews : any[] = []
  fromDate: any = moment().subtract(29, 'days');;
  toDate: any = moment();
  currentPageReviews : any[] = []
  pageSize : number = 5
  page : number = 1
  allowedSizes = [5,10,15]
  selectAll : boolean = false
  filter = {
    rating : "",
    name : "",
  }
  userName = ""
  constructor(private service : DataService, private router : Router) {
  }

  async ngOnInit(){
    console.log("user",this.service.getuser())
    if(this.service.getuser() === null){
      this.router.navigateByUrl('/')
      return
    }
    else{
      this.userName = this.service.getuser().displayName;
    }
    $('#reportrange').daterangepicker({
        startDate: this.fromDate,
        endDate: this.toDate,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, this.cb);
    await this.getData()
  }
  
  clearFilter(){
    this.filter = JSON.parse(JSON.stringify({rating : "",name : ""}))
    this.filteredReviews = this.reviews
  }
  onChange(){
    this.filteredReviews = this.reviews.filter(v => {
      if(this.filter.rating === "")
        return true
      if(this.filter.rating !== "" && parseInt(this.filter.rating) <= v.rating)
        return true
      return false
    })
    if(this.filter.name === "a")
      this.filteredReviews = this.filteredReviews.filter(v => v.name === "Anonymous")
    else if(this.filter.name === "na")
      this.filteredReviews = this.filteredReviews.filter(v => v.name !== "Anonymous")
    this.refreshPages()
  }
  cb(start, end) {
    var el = document.getElementById('reportrange')
    el.innerText = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')
    this.fromDate = start
    this.toDate = end
  }
  selectItem(i){
    this.filteredReviews[i].selected = !this.filteredReviews[i].selected
  }
  approve(i){
    this.service.approve([this.filteredReviews[i].id]).then(async v => {
      if(v){
        this.showAlert("Success","The review has been accpeted successfully","success")
        await this.getData()
      }
    }).catch(err => {
      this.showAlert("Success","The review could not be accpeted, please try again later","error")
    })
  }
  reject(i){
    this.service.reject([this.filteredReviews[i].id]).then(async v => {
      if(v){
        this.showAlert("Success","The review has been rejected successfully","success")
        await this.getData()
      }
    }).catch(err => {
      this.showAlert("Success","The review could not be rejected","success")
    })
  }
  approveSelected(){
    var temp = this.filteredReviews.filter(v => v.selected).map(v => v.id)
    console.log(temp)
    this.service.approve(temp).then(async v => {
      if(v){
        this.showAlert("Success","Reviews have been accepted successfully","success")
        await this.getData()
      }
    }).catch(err => {
      this.showAlert("Error","Reviews could not be accpeted, Please try again later.","error")
    })
  }
  rejectSelected(){
    var temp = this.filteredReviews.filter(v => v.selected).map(v => v.id)
    console.log(temp)
    this.service.reject(temp).then(async v => {
      if(v){
        this.showAlert("Success","Reviews have been rejected successfully","success")
        await this.getData()
      }
    }).catch(err => {
        this.showAlert("Error","Reviews could not be rejected, Please try again later.","error")
    })
  }



  refreshPages() {
    this.currentPageReviews =this.filteredReviews
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  showAlert(title,text,icon){
    Swal.fire({
      title : title,
      text : text,
      icon : icon,
      showCancelButton : false,
      showConfirmButton : false,
      showCloseButton : true,
    })
  }

  selectAllRows(){
    this.selectAll = !this.selectAll
    this.filteredReviews.forEach(v => v['selected'] = this.selectAll)
    this.refreshPages()
  }

  async getData(){
    this.selectAll = false
    this.reviews = await this.service.getFeedback()
    this.reviews.forEach(v => {
      v['selected'] = false
    })
    this.filteredReviews =  this.reviews
    this.collectionSize = this.filteredReviews.length
    this.refreshPages()
  }
}

