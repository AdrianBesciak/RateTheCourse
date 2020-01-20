import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admins-cockpit',
  templateUrl: './admins-cockpit.component.html',
  styleUrls: ['./admins-cockpit.component.css']
})
export class AdminsCockpitComponent implements OnInit {

  constructor(private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    if (!this.auth.isCurrentUserAdmin())
      this.router.navigateByUrl('');
  }

}
