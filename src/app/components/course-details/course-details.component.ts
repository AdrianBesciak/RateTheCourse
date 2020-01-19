import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { OpenedCourseService } from '../../services/opened-course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private courseToShow: OpenedCourseService,
    private router: Router) { 
    
  }

  ngOnInit() {
    this.course = this.courseToShow.getOpenedCourse();
  }

}
