import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { Router } from '@angular/router';
import { CourseServiceService } from '../../services/course-service.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private router: Router,
              private courseService: CourseServiceService,
              private auth: AuthenticationService) { 
    
  }

  ngOnInit() {
    //this.course = this.courseToShow.getOpenedCourse();
    this.course = this.courseService.getCourse(+this.router.url.split('/', 3)[2]);
    //console.log(this.router.url.split('/', 3)[2]);
    console.log(this.course.courseRate);
  }



}
