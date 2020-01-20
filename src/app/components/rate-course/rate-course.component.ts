//component to rate course
import { Component, OnInit, Input } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import { Rate } from '../../models/Rate';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-rate-course',
  templateUrl: './rate-course.component.html',
  styleUrls: ['./rate-course.component.css']
})

export class RateCourseComponent implements OnInit {
  @Input() rate : Rate;

  constructor(private service: CourseServiceService,
    private auth: AuthenticationService) { }

  ngOnInit() {
  }

  clicked(rate: number) {
    console.log("rate: " + rate);
   // this.rate.deleteRate  //uncomment when user is logged
    var communicate = this.service.getCourse(this.service.getIndexOfActualOpenedCourse()).courseRate.addRate(rate, this.auth.currentUserEmail);
    console.log(communicate);
  }

}
