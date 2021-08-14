import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firestore'
import 'firebase/storage'

import { of, Subject } from 'rxjs';

const firebaseConfig = {
  apiKey: "AIzaSyCkfqj602Vf2ED95xg2FmAWb-VMZO11e-w",
  authDomain: "drsmileweb.firebaseapp.com",
  projectId: "drsmileweb",
  storageBucket: "drsmileweb.appspot.com",
  messagingSenderId: "827046137011",
  appId: "1:827046137011:web:c07e682a01bc202b9cf4c6",
  measurementId: "G-YHDXK4DPTS"
};



declare var $ : any
@Injectable({
  providedIn: 'root'
})
export class DataService {
  db : any = null
  constructor(private http : HttpClient) {
    firebase.initializeApp(firebaseConfig)
    this.db = firebase.firestore()
  }
  listOfServices : any[] = [];
  dates : Date[] = []
  news : any[] = []
  latestFlag : Subject<boolean> = new Subject<boolean>();
  /*async getData(){
    const resp = await app.content.get({schemaKey : 'services',populate : true})
    const list = Object.values(resp)
    this.listOfServices = list
    console.log(list)
    return list
  }*/
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
  /*async getNews(){
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
  }*/
  submitForm(data : any){
    return this.http.get("https://script.google.com/macros/s/AKfycbwBIG2-nHAnEzOM4eQCT6Vjtvz-fynP8Vmt1iPiXSQoLdhHXuRC_IFFgioq4TmyylY8/exec?"+data)
  }
  async submitFeedback(obj){
    console.log(obj)
    console.log(this.db)
    var resp = await this.db.collection('feedback').add(obj)
    return resp
  }
  async getFeedback():Promise<any[]>{
    return this.db.collection('feedback').get().then(snap => {
      return snap.docs.map(v => v.data())
    })
  }
}
