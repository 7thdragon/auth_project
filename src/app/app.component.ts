import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './auth-page/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'auth-project';


//   isSignedIn = false;
//   constructor(public firebaseService:FirebaseService){}

  ngOnInit(){
    // if(localStorage.getItem('user') !==null){
    //   this.isSignedIn=true;
    // }
    // else{
    //   this.isSignedIn=false;
    }
  }
  
//   onSignup(email:string,password:string){
// this.firebaseService.signup(email,password)
// if(this.firebaseService.isLoggedIn){
//   this.isSignedIn=true;
// }
//   }


//   onSignin(email:string,password:string){
//     this.firebaseService.signup(email,password)
//     if(this.firebaseService.isLoggedIn){
//       this.isSignedIn=true;
//     }
//       }


//       handleLogout(){
//         this
//       }


