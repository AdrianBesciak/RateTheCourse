import { TestBed } from '@angular/core/testing';

import { OpenedCourseService } from './opened-course.service';

describe('OpenedCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenedCourseService = TestBed.get(OpenedCourseService);
    expect(service).toBeTruthy();
  });
});
