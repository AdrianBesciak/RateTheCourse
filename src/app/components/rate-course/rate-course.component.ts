import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-course',
  templateUrl: './rate-course.component.html',
  styleUrls: ['./rate-course.component.css']
})

export class RateCourseComponent implements OnInit {
  @Input() rate : number;

  constructor() { }

  ngOnInit() {
  }

  clicked(rate: number) {
    console.log("JEST!!!" + rate);
  }

}
