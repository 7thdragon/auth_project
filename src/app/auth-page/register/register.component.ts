import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public firebaseService:FirebaseService ,  private router: Router) { }

  ngOnInit(): void {
  }
  iskey: any;
 
  async onSubmit(form: NgForm) {
    this.iskey = await this.firebaseService.registerUser(form.value);


    if (this.iskey.user.uid) {
      this.router.navigate(['/home']);
    }

    form.reset();
  }

}
