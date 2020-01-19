import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { OpenedCourseService } from '../../services/opened-course.service';
import { CourseServiceService } from '../../services/course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;


  constructor(private openedCourse: OpenedCourseService,
    private courseService: CourseServiceService) { }

  ngOnInit() {
  }

  //set Dynamic Classes
  setClasses() {
    console.log('set classes');
  }

  clicked(course) {
    console.log('course set to');
    course.isOpened = !course.isOpened;
    console.log(course.isOpened);
    this.openedCourse.setOpenedCourse(course);
  }

  onDelete(course) {
    console.log('delete');
    this.courseService.deleteCourse(course);
  }

}
