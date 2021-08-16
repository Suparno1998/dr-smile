import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { Subject } from 'rxjs';
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
export class DataService implements OnInit{
  db : any = null
  auth : any = null
  private user : any = null
  constructor(private http : HttpClient) {
    firebase.initializeApp(firebaseConfig)
    this.db = firebase.firestore()
    this.auth = firebase.auth()
  }
  listOfServices : any[] = [];
  dates : Date[] = []
  news : any[] = []
  userSubject : Subject<any> = new Subject<any>()
  convertDate(d : Date) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    function pad(s) { return (s < 10) ? '0' + s : s; }
    return [[pad(d.getDate()),months[d.getMonth()]].join(" "), d.getFullYear()].join(',')
  }
  ngOnInit(){
    this.userSubject.subscribe(v => {
      this.user = v
    })
  }
  getDiffDays(date2 : Date,date1 : Date){
    const diffTime = Math.abs(date2.getMilliseconds() - date1.getMilliseconds());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays 
  }
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
      return snap.docs.map(v =>{ return {id :v.id, ...v.data()}})
    })
  }
  async login(cred){
    try{
      this.user = await this.auth.signInWithEmailAndPassword(cred.username,cred.password)
      this.userSubject.next(this.user)
      //console.log(this.user)
      return true
    }catch(e){
      return false
    }
  }
  getuser(){
    return this.user
  }
  setuser(user){
    this.user = user
  }
  getAuth(){
    return this.auth
  }
  async approve(items : any[]):Promise<boolean>{
    try{
      if(items.length == 0)
        return null;
      await this.db.runTransaction(async (t)=>{
        for(var i in items){
          const itemRef = await this.db.collection('feedback').doc(items[i])
          t.update(itemRef, {activeFlag : true});
        }
      })
      return true
    }
    catch(err){
      console.log(err.message)
      return false
    }
  }
  async reject(items : any[]):Promise<boolean>{
    try{
      if(items.length == 0)
        return null;
      await this.db.runTransaction(async (t)=>{
        for(var i in items){
          const itemRef = await this.db.collection('feedback').doc(items[i])
          t.update(itemRef, {activeFlag : false});
        }
      })
      return true
    }catch(err){
      console.log(err.message)
      return false
    }
  }
}
