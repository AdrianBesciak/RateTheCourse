import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { Rate } from '../models/Rate';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class CourseServiceService {
  courses: Array<Course>;

  constructor(private router: Router) { 
    this.courses = [
      {
        shortName: "wdi",
        name : 'Wstęp do Informatyki',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 1,
        img : 'assets/img/wdi.png',
        isOpened:false
      },
      {
        shortName: "unix",
        name : 'Wprowadzenie do systemu UNIX',
        ects : 4,
        semester : 1,
        lecture : true,
        exercises : false,
        laboratory : true,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 2,
        img : 'assets/img/wdsu.png',
        isOpened:false
      },
      {
        shortName: "ki",
        name : 'Kompetencje interpersonalne',
        ects : 3,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 3,
        img : 'assets/img/ki.jpg',
        isOpened:false
      },
      {
        shortName: "analiza1",
        name : 'Analiza matematyczna 1',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 4,
        img : 'assets/img/analiza.jpg',
        isOpened:false
      },
      {
        shortName: "algebra",
        name : 'Algebra',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 5,
        img : 'assets/img/algebra.jpg',
        isOpened:false
      },
      {
        shortName: "dyskretna",
        name : 'Matematyka dyskretna',
        ects : 5,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 1,
        img : 'assets/img/dyskretna.png',
        isOpened:false
      },
      {
        shortName: "asd",
        name : 'Algorytmy i struktury danych',
        ects : 6,
        semester : 2,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 2,
        img : 'assets/img/asd.png',
        isOpened:false
      },
      {
        shortName: "pi",
        name : 'Programowanie imperatywne',
        ects : 5,
        semester : 2,
        lecture : true,
        exercises : false,
        laboratory : true,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 3,
        img : 'assets/img/pi.png',
        isOpened:false
      },
      {
        shortName: "fizyka1",
        name : 'Fizyka 1',
        ects : 6,
        semester : 2,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 4,
        img : 'assets/img/fizyka.png',
        isOpened:false
      },
      {
        shortName: "owi",
        name : 'Ochrona własności intelektualnej',
        ects : 3,
        semester : 2,
        lecture : true,
        exercises : false,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 5,
        img : 'assets/img/owi.jpg',
        isOpened:false
      }
    ];
  }

  getCourses() {
    return this.courses;
  }

  getCourse(index: number) {
    return this.courses[index];
  }

  deleteCourse(course: Course) {
    this.courses.splice(this.courses.indexOf(course), 1);
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  updateCourseRate(rate: Rate) {
    this.courses[this.getIndexOfActualOpenedCourse()].courseRate = rate.getRate();
  }

  private getIndexOfActualOpenedCourse() : number {
    return +this.router.url.split('/', 3)[2]
  }
}
