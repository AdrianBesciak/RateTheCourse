import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CourseServiceService {

  constructor() { }

  getCourses() {
    return [
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
        img : 'assets/img/wdi.png',
        isOpened:false
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
        img : 'assets/img/wdsu.png',
        isOpened:false
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
        img : 'assets/img/ki.jpg',
        isOpened:false
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
        img : 'assets/img/analiza.jpg',
        isOpened:false
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
        img : 'assets/img/algebra.jpg',
        isOpened:false
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
        img : 'assets/img/dyskretna.png',
        isOpened:false
      },
      {
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
}
