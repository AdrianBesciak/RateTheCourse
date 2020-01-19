import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { OpenedCourseService } from '../../services/opened-course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private courseToShow: OpenedCourseService) { 
    if (this.courseToShow == null) {
      console.log('change site to main');
    }
  }

  ngOnInit() {
    this.course = this.courseToShow.getOpenedCourse();
  }

}
