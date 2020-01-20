import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CourseServiceService } from '../../services/course-service.service';
import { Course } from '../../models/Course';
import { Router } from '@angular/router';
import { Rate } from '../../models/Rate';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  shortName = new FormControl('');
  name = new FormControl('');
  ects = new FormControl('');
  semester = new FormControl('');
  lecture = new FormControl('');
  exercises = new FormControl('');
  laboratory = new FormControl('');
  project = new FormControl('');
  maxAmountOfStudents = new FormControl('');
  rate = new Rate();

  constructor(private courseService: CourseServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  addCourse() {
    if (this.lecture.value == 1)
      this.lecture.setValue(true);
    else 
      this.lecture.setValue(false);

    if (this.exercises.value == 1)
      this.exercises.setValue(true);
    else 
      this.exercises.setValue(false);

    if (this.laboratory.value == 1)
      this.laboratory.setValue(true);
    else 
      this.laboratory.setValue(false);

    if (this.project.value == 1)
      this.project.setValue(true);
    else 
      this.project.setValue(false);
    
    
      
    var course = new Course(this.shortName.value, this.name.value, this.ects.value, this.semester.value, this.lecture.value, 
      this.exercises.value, this.laboratory.value, this.project.value, this.maxAmountOfStudents.value, this.rate,
       'assets/img/wdi.png', false);
    
    
    this.courseService.addCourse(course);
    this.router.navigateByUrl('');
    console.log('kurs dodany');
  }
}
