import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OpenedCourseService {
  course: Course;

  constructor(private router:Router) { 
    
  }


  getOpenedCourse() {
    if (this.course == null) {
      this.router.navigateByUrl('');
      return;
    }
    return this.course;
  }

  setOpenedCourse(newCourse: Course) {
    this.course = newCourse;
  }
}
