import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUserEmail: string;
  isAdminLogged: boolean;
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth,
    private router: Router) {
    this.userData = angularFireAuth.authState;
    this.currentUserEmail = 'notLoggedIn';
    this.isAdminLogged = false;
   }


   // Sign up
   SignUp(email: string, password: string) {
     this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
       console.log('You are succesfully signed up!', res);
       this.SignIn(email, password);
     }).catch(error => {
       console.log('Something is wrong', error.message);
     });
   }

   //Sign in
   SignIn(email: string, password: string) {
     this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
       console.log('You are succesfully logged in!');
       this.currentUserEmail = this.angularFireAuth.auth.currentUser.email;
       this.router.navigateByUrl('');
       if (this.currentUserEmail.split('@', 2)[1] === 'admin.com')
        this.isAdminLogged = true;
     }).catch(error => {
       console.log('Something is wron:', error.message);
     });

   }

   //Sign out
   SignOut() {
     this.angularFireAuth.auth.signOut();
     this.currentUserEmail='notLoggedIn';
     this.isAdminLogged = false;
     console.log('wylogowano');

   }

   loggedUserEmail(): string{
    console.log(this.currentUserEmail); 
    return this.currentUserEmail;
   }

   isCurrentUserAdmin(): boolean{
     return this.isAdminLogged;
   }


}
