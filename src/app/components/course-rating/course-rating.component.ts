import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-rating',
  templateUrl: './course-rating.component.html',
  styleUrls: ['./course-rating.component.css']
})
export class CourseRatingComponent implements OnInit {
  @Input() rate : number;

  constructor() { }

  ngOnInit() {
  }

  clicked(rate: number) {
    console.log("JEST!!!" + rate);
  }

}
