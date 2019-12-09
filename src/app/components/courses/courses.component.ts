import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:Course[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      {
        name : 'Wstęp do Informatyki',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 1,
        img : 'assets/img/wdi.png'
      },
      {
        name : 'Wprowadzenie do systemu UNIX',
        ects : 4,
        semester : 1,
        lecture : true,
        exercises : false,
        laboratory : true,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 2,
        img : 'assets/img/wdsu.png'
      },
      {
        name : 'Kompetencje interpersonalne',
        ects : 3,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 3,
        img : 'assets/img/ki.jpg'
      },
      {
        name : 'Analiza matematyczna 1',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 4,
        img : 'assets/img/analiza.jpg'
      },
      {
        name : 'Algebra',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 5,
        img : 'assets/img/algebra.jpg'
      },
      {
        name : 'Matematyka dyskretna',
        ects : 5,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 1,
        img : 'assets/img/dyskretna.png'
      },
      {
        name : 'Algorytmy i struktury danych',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 2,
        img : 'assets/img/asd.png'
      },
      {
        name : 'Programowanie imperatywne',
        ects : 5,
        semester : 1,
        lecture : true,
        exercises : false,
        laboratory : true,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 3,
        img : 'assets/img/pi.png'
      },
      {
        name : 'Fizyka 1',
        ects : 6,
        semester : 1,
        lecture : true,
        exercises : true,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 4,
        img : 'assets/img/fizyka.png'
      },
      {
        name : 'Ochrona własności intelektualnej',
        ects : 3,
        semester : 1,
        lecture : true,
        exercises : false,
        laboratory : false,
        project : false,
        maxAmountOfStudents : 300,
        courseRate : 5,
        img : 'assets/img/owi.jpg'
      }
    ]
    console.log(this.courses[0].img);
  }

}
