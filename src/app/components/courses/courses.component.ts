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
        courseRate : 1
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
        courseRate : 2
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
        courseRate : 3
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
        courseRate : 4
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
        courseRate : 5
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
        courseRate : 1
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
        courseRate : 2
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
        courseRate : 3
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
        courseRate : 4
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
        courseRate : 5
      }
    ]
  }

}
