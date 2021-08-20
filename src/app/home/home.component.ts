import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { FirebaseService } from '../auth-page/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Output() isLogout= new EventEmitter<void> ();
  constructor(public readonly firebaseService:FirebaseService ,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  // logout(){
  //   this.firebaseService.logout();
  //   this.isLogout.emit()
  // }

  Logout(event: any) {
    this.firebaseService .logout().then((value) => {
      this.router.navigate(['/login']);
    });
  }
}
