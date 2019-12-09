import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  constructor() { }

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
  }

  onDelete(course) {
    console.log('delete');
  }

}
