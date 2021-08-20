import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth-page/login/login.component';
import { RegisterComponent } from './auth-page/register/register.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; 

import { FirebaseService } from './auth-page/services/firebase.service';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD95I54bBciy0x27XuICOdeRbFnMN_rkec",
      authDomain: "auth-project-b234a.firebaseapp.com",
      projectId: "auth-project-b234a",
      storageBucket: "auth-project-b234a.appspot.com",
      messagingSenderId: "1069663257172",
      appId: "1:1069663257172:web:767032fc813959c61a63c1"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
