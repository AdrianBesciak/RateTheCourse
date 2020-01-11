import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.authenticationService.SignUp(this.email.value, this.password.value);
  }

}
