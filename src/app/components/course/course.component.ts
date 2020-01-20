import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseServiceService } from '../../services/course-service.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  indexInCourses: number;


  constructor(private courseService: CourseServiceService,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.indexInCourses = this.courseService.getCourses().indexOf(this.course);
  }

  //set Dynamic Classes
  setClasses() {
    console.log('set classes');
  }

  clicked(course) {
    console.log('course set to');
    course.isOpened = !course.isOpened;
    console.log(course.isOpened);
  }

  onDelete(course) {
    console.log('delete');
    this.courseService.deleteCourse(course);
  }

}
