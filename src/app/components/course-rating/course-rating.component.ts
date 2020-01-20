import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-rating',
  templateUrl: './course-rating.component.html',
  styleUrls: ['./course-rating.component.css']
})
export class CourseRatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(num: number) {
    console.log("JEST!!!" + num);
  }

}
