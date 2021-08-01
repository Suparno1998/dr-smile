import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// Flamelink app is always required
import flamelink from 'flamelink/app'
// Add additional modules that you want to use
import 'flamelink/content'
import 'flamelink/storage'
import { of, Subject } from 'rxjs';

const firebaseConfig = {
  apiKey: "AIzaSyCfm23lJ2rmUKf2hEvmGjoVVy_nUQI-Qyw",
  authDomain: "test-proj-9cb5f.firebaseapp.com",
  projectId: "test-proj-9cb5f",
  storageBucket: "test-proj-9cb5f.appspot.com",
  messagingSenderId: "633346289613",
  appId: "1:633346289613:web:2bbe4db254406c0384de84",
  measurementId: "G-JJE16Z0Q0K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const app = flamelink({
  firebaseApp,
  env: 'production', // optional, defaults to `production`
  locale: 'en-US', // optional, defaults to `en-US`
  dbType: 'cf' // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
})

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http : HttpClient) { }
  listOfServices : any[] = [];
  dates : Date[] = []
  news : any[] = []
  latestFlag : Subject<boolean> = new Subject<boolean>();
  async getData(){
    const resp = await app.content.get({schemaKey : 'services',populate : true})
    const list = Object.values(resp)
    this.listOfServices = list
    console.log(list)
    return list
  }
  convertDate(d : Date) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    function pad(s) { return (s < 10) ? '0' + s : s; }
    return [[pad(d.getDate()),months[d.getMonth()]].join(" "), d.getFullYear()].join(',')
  }
  getDiffDays(date2 : Date,date1 : Date){
    const diffTime = Math.abs(date2.getMilliseconds() - date1.getMilliseconds());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays 
  }
  async getNews(){
    const notifications = await app.content.get({schemaKey : 'notification'})
    //console.log(notifications)
    this.news = Object.values(notifications)
    this.news.forEach(v => {
      //console.log(v._fl_meta_.createdDate.seconds)
      v.creationDate = this.convertDate(new Date(v._fl_meta_.createdDate.seconds*1000))
      this.dates.push(new Date(v._fl_meta_.createdDate.seconds*1000))
    })
    var latest = new Date(Math.max.apply(null,this.dates));
    if(this.getDiffDays(new Date(),latest) <= 24){
      this.latestFlag.next(true)
    }
    else{
      this.latestFlag.next(false)
    }
    return this.news
  }
  submitForm(data : any){
    return this.http.get("https://script.google.com/macros/s/AKfycbwBIG2-nHAnEzOM4eQCT6Vjtvz-fynP8Vmt1iPiXSQoLdhHXuRC_IFFgioq4TmyylY8/exec?"+data)
  }
}
