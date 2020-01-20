import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUserEmail: string;
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    this.currentUserEmail = '';
   }


   // Sign up
   SignUp(email: string, password: string) {
     this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
       console.log('You are succesfully signed up!', res);
     }).catch(error => {
       console.log('Something is wrong', error.message);
     });
   }

   //Sign in
   SignIn(email: string, password: string) {
     this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
       console.log('You are succesfully logged in!');
       this.currentUserEmail = this.angularFireAuth.auth.currentUser.email;
     }).catch(error => {
       console.log('Something is wron:', error.message);
     });

   }

   //Sign out
   SignOut() {
     this.angularFireAuth.auth.signOut();
     this.currentUserEmail='';
     console.log('wylogowano');

   }

   loggedUserEmail(){
    console.log(this.currentUserEmail); 
    return this.currentUserEmail;
   }
}
