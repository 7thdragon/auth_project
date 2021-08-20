import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth'; 


@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

  constructor( public afAuth: AngularFireAuth) { }

// register user

  async registerUser(value: { name: string; email: string; password: string }) {
    const userCred = await this.afAuth.createUserWithEmailAndPassword(
      value.email,
      value.password
    );

    if (userCred.user?.uid) {
      localStorage.user = JSON.stringify(userCred.user);
    }

    return userCred;
  }

// login user


async signIn(userCred: { email: string; password: string }) {
  const user = await this.afAuth.signInWithEmailAndPassword(
    userCred.email,
    userCred.password
  );

  if (user.user?.uid) {
    localStorage.user = JSON.stringify(user);
  }

  return user;
}

// logged in user 

isLoggedIn() {
  return JSON.parse(localStorage.user || '{}');
}

// logout user


async logout() {
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  return;
}



}
