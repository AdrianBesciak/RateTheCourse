import { Injectable } from '@angular/core';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class OpenedCourseService {
  course: Course;

  constructor() { }

  getOpenedCourse() {
    return this.course;
  }

  setOpenedCourse(newCourse: Course) {
    this.course = newCourse;
  }
}
