import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';

import { Course } from '../../models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:Course[];

  constructor(private coursesService:CourseServiceService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

}
