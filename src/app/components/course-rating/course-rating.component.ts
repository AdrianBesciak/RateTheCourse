//component to show rate of the course
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-rating',
  templateUrl: './course-rating.component.html',
  styleUrls: ['./course-rating.component.css']
})
export class CourseRatingComponent implements OnInit {
  @Input() rate : number;

  constructor() { }

  ngOnInit() {
    console.log("Rate: " +this.rate);
  }

}
