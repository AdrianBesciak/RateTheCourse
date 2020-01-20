import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');


  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authenticationService.SignIn(this.email.value, this.password.value); 
    //this.email = '';
    //this.password = '';
  }

  checkUser() {
    this.authenticationService.loggedUserEmail();
  }

}
