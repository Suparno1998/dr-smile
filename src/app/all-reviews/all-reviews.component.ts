import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {

  reviews : any[] = []
  filteredReviews : any[] = []
  filter = {
    rating : "",
    name : "",
  }
  constructor(private service : DataService) { }

  async ngOnInit(){
      var temp = await this.service.getFeedback()
      this.reviews = temp.filter(v => v.activeFlag == true)
      this.filteredReviews = this.reviews
      console.log(this.reviews)
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
  }
}
